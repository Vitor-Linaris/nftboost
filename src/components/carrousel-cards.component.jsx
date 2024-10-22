"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

import { CardsNFT } from "./card-nft.component";

import Arrow from "@/assets/arrow.svg";
import Image from "next/image";

export function CarrouselCards({ data }) {
  const swiperRef = useRef();

  return (
    <div className="w-full relative">
      <button
        className="w-12 h-12 bg-blue-primary hover:bg-gray-hover-btn-slide rounded-full hidden @desktop:flex items-center justify-center absolute z-10 top-1/2 -mt-6 -left-6 transition-all ease-linear border border-white border-opacity-5"
        onClick={() => {
          swiperRef.current?.slidePrev();
        }}>
        <Image src={Arrow} alt="Icon arrow previous" />
      </button>
      <Swiper
        slidesPerView={4}
        spaceBetween={33}
        speed={800}
        loop={true}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.3,
            spaceBetween: 24,
          },
          640: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.3,
          },
          1250: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
        className="!px-3">
        {data.map(({ name, thumbnail, value, value_brl }, index) => (
          <SwiperSlide key={index}>
            <CardsNFT
              name={name}
              thumbnail={thumbnail}
              value={value}
              value_brl={value_brl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="w-12 h-12 bg-blue-primary hover:bg-gray-hover-btn-slide rounded-full hidden @desktop:flex items-center justify-center rotate-180 absolute z-10 top-1/2 -mt-6 -right-6 transition-all ease-linear border border-white border-opacity-5"
        onClick={() => {
          swiperRef.current?.slideNext();
        }}>
        <Image src={Arrow} alt="Icon arrow previous" />
      </button>
    </div>
  );
}
