"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";

import { ContainerGrid } from "./container.component";

import GooglePlay from "@/assets/apple.svg";
import AppleStore from "@/assets/google.svg";

gsap.registerPlugin(ScrollTrigger);

export function SectionBanner() {
  const bannerRef = useRef(null);
  useEffect(() => {
    const banner = bannerRef.current;

    gsap.fromTo(
      banner,
      {
        opacity: 0,
        scale: 0.7,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: banner,
          start: "top-=100% center",
        },
      }
    );
  }, []);

  return (
    <section>
      <ContainerGrid>
        <div
          className="w-full h-auto @laptop:h-area-banner bg-banner-hero bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center rounded-xl py-10 @laptop:py-0 px-2 @laptop:px-0"
          ref={bannerRef}>
          <h2 className="text-4xl @laptop:text-6xl/snug font-poppins text-center mb-4">
            Abra as Portas para a Próxima Revolução Digital!
          </h2>
          <p className="text-center text-base @laptop:text-xl mb-6 max-w-xl">
            Descubra, Adquira e Possua os NFTs Mais Valiosos do Universo
            Digital. Sua Oportunidade, Sua História
          </p>
          <div className="flex flex-col @laptop:flex-row items-center gap-6">
            <Image src={GooglePlay} alt="GooglePlay" />
            <Image src={AppleStore} alt="AppleStore" />
          </div>
        </div>
      </ContainerGrid>
    </section>
  );
}
