"use client";

import { TbArrowUpRight } from "react-icons/tb";
import { Button } from "./ui/button";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules"; // Ensure you import necessary modules
import Image from "next/image";

export default function CatalogSwiperSection() {
  return (
    <div className="py-8 lg:py-28">
      <div className="container grid pb-8 lg:grid-cols-1">
        <div className="text-left">
          <h1 className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">
            Modern Classic
          </h1>
          <h2 className="pb-6 text-xl font-bold tracking-wider mt-5">
            LUXURY DECOR TO CREATE COMFORT IN OUR HOME
          </h2>
          <div className="grid grid-cols-2 text-gray-500 gap-x-8">
            <p>
              interior design company is the heartbeat that drives its success
              and creativity. This fervor translates into a relentless pursuit
              of excellence, where every project becomes a canvas for innovation
              and artistic expression.
            </p>
            <p>
              With a deep-seated love for transforming spaces, an interior
              design company driven by passion doesn't just create beautiful
              interiors—they create experiences that inspire and uplift, turning
              every client's vision into a reality beyond their wildest dreams.
            </p>
          </div>
          <a href="/gallery">
            <Button
              className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full
           shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
            >
              View Gallery <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
      {/* Swiper Section */}
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <Image
            src="/image/swiper1.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper2.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper3.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper4.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper5.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
