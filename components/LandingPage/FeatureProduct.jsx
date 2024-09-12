"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: "$19.99",
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=200&text=T-Shirt",
  },
  {
    id: 2,
    name: "Denim Jeans",
    price: "$49.99",
    rating: 4.2,
    image: "/placeholder.svg?height=200&width=200&text=Jeans",
  },
  {
    id: 3,
    name: "Leather Jacket",
    price: "$99.99",
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=200&text=Jacket",
  },
  {
    id: 4,
    name: "Sneakers",
    price: "$79.99",
    rating: 4.3,
    image: "/placeholder.svg?height=200&width=200&text=Sneakers",
  },
  {
    id: 5,
    name: "Wool Sweater",
    price: "$59.99",
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=200&text=Sweater",
  },
  {
    id: 6,
    name: "Summer Dress",
    price: "$39.99",
    rating: 4.4,
    image: "/placeholder.svg?height=200&width=200&text=Dress",
  },
  {
    id: 7,
    name: "Formal Suit",
    price: "$149.99",
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=200&text=Suit",
  },
  {
    id: 8,
    name: "Silk Scarf",
    price: "$29.99",
    rating: 4.1,
    image: "/placeholder.svg?height=200&width=200&text=Scarf",
  },
];
const FeatureProduct = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollLeft;
        const itemWidth = scrollRef.current.offsetWidth;
        const newIndex = Math.round(scrollPosition / itemWidth);
        setCurrentProductIndex(newIndex);
      }
    };

    scrollRef.current?.addEventListener("scroll", handleScroll);
    return () => scrollRef.current?.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <section className="mb-12">
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <div className="w-full md:w-2/3">
            <h3 className="text-[#1A1A1A] text-2xl lg:text-4xl font-semibold leading-10 lg:leading-[62.54px]">
              Trending..
            </h3>
            <p className="text-[#656567] text-sm lg:text-base lg:leading-6">
              Dive into a world of fashion innovation at Steeze and Needle. Our
              carefully curated collections bring together the latest trends and
              timeless classics, ensuring you find the perfect pieces for every
              occasion.
            </p>
          </div>

          <div className="w-full md:w-1/3 md:text-end">
            <Button className="rounded-full">View All Products</Button>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex flex-wrap justify-between items-center mb-6 border-y-2 py-4">
          <div className="space-x-4 mb-4 md:mb-0 relative">
            {["All", "Menswear", "Womenswear", "Kidswear"].map((category) => (
              <button
                key={category}
                className={`text-base font-medium ${
                  activeCategory === category ? "text-primary" : "text-gray-600"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
            <div
              className="absolute bottom-0 left-[-20px] h-0.5 bg-primary transition-all duration-300"
              style={{
                width: "24px",
                transform: `translateX(${
                  activeCategory === "All"
                    ? "0"
                    : activeCategory === "Menswear"
                    ? "40px"
                    : activeCategory === "Womenswear"
                    ? "128px"
                    : "242px"
                })`,
              }}
            />
          </div>
          <div className="space-x-2 md:space-x-4">
            <Button variant="outline" className="rounded-full">
              Tailoring
            </Button>
            <Button variant="outline" className="rounded-full">
              Fabrics
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory"
            style={{ scrollBehavior: "smooth" }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 px-2 snap-start"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover"
                  />
                  <Link href={`/product-details/${product.id}`}>
                    <div className="p-3">
                      <h3 className="text-sm font-semibold mb-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm ml-1">{product.rating}</span>
                      </div>
                      <p className="text-sm text-gray-600">{product.price}</p>
                    </div>
                  </Link>
                  <Button
                    variant="ghost"
                    className="absolute right-2 bottom-14 rounded-full p-3"
                    aria-label="Add to Cart"
                  >
                    <ShoppingCart size={20} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <div
              className="bg-primary w-20 h-1 rounded-full transition-all duration-300 ease-in-out"
              style={{
                transform: `translateX(${
                  currentProductIndex * 100 - (products.length - 1) * 20
                }%)`,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureProduct;
