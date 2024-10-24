"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CardsLeft from "@/assets/cards-left.png";
import CardsRight from "@/assets/cards-right.png";

gsap.registerPlugin(ScrollTrigger);

export function CardsHero() {
  const areaCardsRef = useRef(null);
  const cardsLeftRef = useRef(null);
  const cardsRightRef = useRef(null);

  useEffect(() => {
    const cardsLeft = cardsLeftRef.current;
    const cardsRight = cardsRightRef.current;
    const areaCards = areaCardsRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: areaCards,
        start: "-=50% center",
        scrub: true,
      },
    });

    tl.to(
      cardsLeft,
      {
        left: 0,
      },
      0
    ).to(
      cardsRight,
      {
        right: 0,
      },
      0
    );
  });
  return (
    <div
      className=" relative w-area-cards-mobile @desktop:w-full h-area-cards-mobile @desktop:h-area-cards-desk mt-12 @desktop:mt-20"
      ref={areaCardsRef}>
      <Image
        src={CardsLeft}
        alt="Cards left"
        className="absolute top-0 left-8 @desktop:left-[25%] w-1/2 @desktop:w-auto z-10"
        ref={cardsLeftRef}
      />
      <Image
        src={CardsRight}
        alt="Cards right"
        className="absolute top-0 right-8 @desktop:right-[25%] w-1/2 @desktop:w-auto"
        ref={cardsRightRef}
      />
    </div>
  );
}
