"use client";
import AboutUs from "@/components/LandingPage/AboutUs";
import BannerOne from "@/components/LandingPage/BannerOne";
import FeatureProduct from "@/components/LandingPage/FeatureProduct";
import Hero from "@/components/LandingPage/Hero";
import Testimonial from "@/components/LandingPage/Testimonial";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Hero />
          <FeatureProduct />
          <AboutUs />
          <BannerOne />
          <Testimonial />
          <BannerOne />
        </div>
      </main>
    </div>
  );
}
