import { ChevronDown } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      image: "/banner.svg",
      text: "Tailored to your",
      title: "Exact Measurements",
      description: "Upload your Measurements & Get Fit!",
    },
    {
      image: "/banner.svg",
      text: "Tailored to your",
      title: "Quality Fabrics at Your Fingertips",
      description:
        "Discover a wide range of premium fabrics, delivered to your doorstep.",
    },
    {
      image: "/banner.svg",
      text: "Tailored to your",
      title: "Tailoring Services Just a Click Away",
      description:
        "Get your clothes tailored by professionals with our express and normal services.",
    },
    {
      image: "/banner.svg",
      text: "Tailored to your",
      title: "Join the Steeze and Needle Community",
      description:
        "Connect with tailors and cloth sellers from around the world.",
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  });

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (!isPaused) {
      const slideInterval = setInterval(nextSlide, 3000);
      // Cleanup interval on component unmount
      return () => clearInterval(slideInterval);
    }
  }, [isPaused, nextSlide]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative h-[250px] lg:h-[376px] mb-6"
    >
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex items-center bg-cover bg-center h-[250px] lg:h-[376px]"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black bg-opacity-0 p-8 rounded-md ml-0 lg:ml-16">
                <p className="text-sm lg:text-2xl font-semibold text-white mb-4">
                  {slide.text}
                </p>
                <h2 className="text-2xl lg:text-6xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-md lg:text-2xl font-semibold text-white">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-gray-100 text-primary border-2 md:border-4 border-white rounded-full z-10 p-2 md:p-4"
      >
        <ChevronDown className="rotate-90" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-gray-100 text-primary border-2 md:border-4 border-white rounded-full z-10 p-2 md:p-4"
      >
        <ChevronDown className="-rotate-90" size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-primary" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
