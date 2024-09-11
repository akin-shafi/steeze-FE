import React from "react";
import { Button } from "@/components/ui/button"

const BannerOne = () => {
  return (
    <section className="mb-12 relative">
      <div
        className="h-[300px] md:h-[400px] bg-cover bg-center rounded-lg overflow-hidden"
        style={{
          backgroundImage:
            "url('/placeholder.svg?height=400&width=1200&text=Banner')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Summer Collection
            </h2>
            <p className="text-lg md:text-xl mb-6">
              Discover our latest summer styles and trends
            </p>
            <Button size="lg">Shop Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
