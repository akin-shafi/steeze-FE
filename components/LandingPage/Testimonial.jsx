import React from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Fashion Enthusiast",
    content:
      "Steeze Market has completely transformed my wardrobe. The quality and style of their products are unmatched!",
    avatar: "/placeholder.svg?height=60&width=60&text=JD",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Professional Stylist",
    content:
      "As a stylist, I always recommend Steeze Market to my clients. Their range of products caters to every style and occasion.",
    avatar: "/placeholder.svg?height=60&width=60&text=JS",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Casual Shopper",
    content:
      "I love how easy it is to find exactly what I'm looking for on Steeze Market. The user experience is top-notch!",
    avatar: "/placeholder.svg?height=60&width=60&text=MJ",
  },
];

const Testimonial = () => {
  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
        <div className="w-full md:w-2/3">
          <p className="text-sm text-[#98989A] text-[18px] uppercase">
            Testimonials
          </p>
          <h3 className="text-[#1A1A1A] text-2xl lg:text-4xl font-semibold leading-10 lg:leading-[62.54px]">
            Customers Love.
          </h3>
          <p className="text-[#656567] text-sm lg:text-base lg:leading-6">
            At Steeze and needle, our customers are the heartbeat of our brand.
            Explore the heartfelt testimonials shared by those who have
            experienced the magic of Steeze and Needle fashion.
          </p>
        </div>
        <div className="w-full md:w-1/3 md:text-end">
          <Button className="rounded-full">View All Testimonials</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg shadow-md p-6 text-center"
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 mb-4">{testimonial.content}</p>
            <h3 className="font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
