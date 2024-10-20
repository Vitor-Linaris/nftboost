"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import { CardsNFT } from "./card-nft.component";

import Thumb01 from "@/assets/img-neft/01.jpg";
import Arrow from "@/assets/arrow.svg";
import Image from "next/image";

export function CarrouselCards() {
  return (
    <div>
      <button>
        <Image src={Arrow} alt="Icon arrow previous" />
      </button>
      <Swiper
        slidesPerView={4}
        spaceBetween={33}
        speed={800}
        loop={true}
        modules={[Navigation]}>
        <SwiperSlide>
          <CardsNFT
            name="Cat #221"
            thumbnail={Thumb01}
            value="0.0721"
            value_brl="602,02"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardsNFT
            name="Cat #221"
            thumbnail={Thumb01}
            value="0.0721"
            value_brl="602,02"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardsNFT
            name="Cat #221"
            thumbnail={Thumb01}
            value="0.0721"
            value_brl="602,02"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardsNFT
            name="Cat #221"
            thumbnail={Thumb01}
            value="0.0721"
            value_brl="602,02"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardsNFT
            name="Cat #221"
            thumbnail={Thumb01}
            value="0.0721"
            value_brl="602,02"
          />
        </SwiperSlide>
      </Swiper>
      <button>
        <Image src={Arrow} alt="Icon arrow previous" />
      </button>
    </div>
  );
}
