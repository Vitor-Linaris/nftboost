"use client";

import Image from "next/image";

import IconBoost from "@/assets/icon-boost.svg";
import SmallNFT01 from "@/assets/nft-small.png";
import SmallNFT02 from "@/assets/nft-small-02.png";
import GooglePlay from "@/assets/google.svg";
import AppleStore from "@/assets/apple.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function AreaText() {
  const areaTextRef = useRef(null);
  const googleRef = useRef(null);
  const appleRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const areaText = areaTextRef.current;
    const google = googleRef.current;
    const apple = appleRef.current;
    const circle = circleRef.current;

    const tl = gsap.timeline();

    tl.fromTo(
      areaText,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      "start"
    )
      .fromTo(
        google,
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
        },
        ">-0.5"
      )
      .fromTo(
        apple,
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
        },
        ">-1"
      )
      .fromTo(
        circle,
        {
          opacity: 0,
          xPercent: 90,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 1,
        },
        "start+=0.7"
      );
  }, []);

  return (
    <>
      <div ref={areaTextRef} className="flex flex-col items-center opacity-0">
        <h3 className="flex items-center gap-2 text-sm @tablet:text-base @desktop:text-xl mb-3">
          <Image src={IconBoost} alt="Icon Boost" />
          <span>Adentre um reino de possibilidades infinitas </span>
        </h3>
        <h1 className="text-5xl/normal @desktop:text-7xl/normal text-center font-poppins mb-4">
          Explore um Universo
          <div className="inline-block align-middle mx-2 p-1 bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full w-24 @desktop:w-32">
            <Image
              src={SmallNFT01}
              alt="Small NFT 01"
              className="w-11 @desktop:w-14 opacity-0"
              ref={circleRef}
            />
          </div>
          Digital de
          <Image
            src={SmallNFT02}
            alt="Small NFT 02"
            className="inline-block w-16 @desktop:w-[7.5rem] mx-2"
          />
          Colecionáveis Únicos!
        </h1>
        <p className="w-full @desktop:max-w-content-desc-hero text-center text-sm @tablet:text-base @desktop:text-xl mb-6 @desktop:mb-9">
          Adentre um reino de possibilidades infinitas e mergulhe nas coleções
          de NFT, onde a arte, a cultura e a inovação se unem para criar
          experiências verdadeiramente exclusivas.
        </p>
      </div>
      <div className="flex flex-col @tablet:flex-row items-center gap-4">
        <Image
          src={GooglePlay}
          alt="GooglePlay"
          ref={googleRef}
          className="opacity-0"
        />
        <Image
          src={AppleStore}
          alt="AppleStore"
          ref={appleRef}
          className="opacity-0"
        />
      </div>
    </>
  );
}
