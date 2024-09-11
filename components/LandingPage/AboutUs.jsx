import React from "react";
import { Star } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="mb-12 space-y-10">
      <div className="">
        <p className="text-sm text-[#98989A] text-[18px] uppercase">About us</p>
        <div className="w-full md:w-2/3">
          <h3 className="text-[#1A1A1A] text-2xl lg:text-4xl font-semibold leading-10 lg:leading-[62.54px]">
            Our Experience.
          </h3>
          <p className="text-[#656567] text-sm lg:text-base lg:leading-6">
            At Steeze and needle, we breathe life into fashion, blending
            creativity with commitment. Our journey is fueled by a dedication to
            delivering unparalleled style and quality. Join us in redefining
            fashion and embracing a community where every purchase tells a
            story.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-2 lg:gap-6 w-full">
        <div className="flex flex-col border rounded-xl bg-white p-5 lg:p-10 w-full gap-3">
          <div className="flex items-center w-full gap-4">
            <div className="bg-primary p-3 rounded-full">
              <Star fill="white" className="w-6 h-6 text-white" />
            </div>
            <p className="text-[#262626] lg:text-[20px] font-semibold">
              Passionate Craftsmanship
            </p>
          </div>
          <p className="leading-[24px] text-sm lg:text-base text-[#666666]">
            Every garment at Steeze and Needle is crafted with passion,
            reflecting our commitment to quality and innovation.
          </p>
        </div>
        <div className="flex flex-col border rounded-xl bg-white p-5 lg:p-10 w-full gap-3">
          <div className="flex items-center w-full gap-4">
            <div className="bg-primary p-3 rounded-full">
              <Star fill="white" className="w-6 h-6 text-white" />
            </div>
            <p className="text-[#262626] lg:text-[20px] font-semibold">
              Customer-Centric Approach
            </p>
          </div>
          <p className="leading-[24px] text-sm lg:text-base font-normal text-[#666666]">
            At Steeze and needle platform, our customers are at the heart of
            everything we do.
          </p>
        </div>

        <div className="flex flex-col border rounded-xl bg-white p-5 lg:p-10 w-full gap-3">
          <div className="flex items-center w-full gap-4">
            <div className="bg-primary p-3 rounded-full">
              <Star fill="white" className="w-6 h-6 text-white" />
            </div>
            <p className="text-[#262626] lg:text-[20px] font-semibold">
              Customer-Centric Approach
            </p>
          </div>
          <p className="leading-[24px] text-sm lg:text-base font-normal text-[#666666]">
            At Steeze and needle platform, our customers are at the heart of
            everything we do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
