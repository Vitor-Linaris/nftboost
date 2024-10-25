"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CardCollectors } from "./card-collectors.component";
import { ContainerGrid } from "./container.component";
import { TitleSection } from "./title-section.component";

import Thumb04 from "@/assets/img-neft/04.jpg";

gsap.registerPlugin(ScrollTrigger);

const collectors = [
  {
    image: Thumb04,
    name: "Lorem Ippsum",
    percent: "+20%",
    value_btc: "0.721",
  },
  {
    image: Thumb04,
    name: "Lorem Ippsum",
    percent: "+20%",
    value_btc: "0.721",
  },
  {
    image: Thumb04,
    name: "Lorem Ippsum",
    percent: "+20%",
    value_btc: "0.721",
  },
  {
    image: Thumb04,
    name: "Lorem Ippsum",
    percent: "+20%",
    value_btc: "0.721",
  },
  {
    image: Thumb04,
    name: "Lorem Ippsum",
    percent: "+20%",
    value_btc: "0.721",
  },
  {
    image: Thumb04,
    name: "Lorem Ippsum",
    percent: "+20%",
    value_btc: "0.721",
  },
  {
    image: Thumb04,
    name: "Lorem Ippsum",
    percent: "+20%",
    value_btc: "0.721",
  },
  {
    image: Thumb04,
    name: "Lorem Ippsum",
    percent: "+20%",
    value_btc: "0.721",
  },
];

export function SectionCollectors() {
  const areaCollectorsRef = useRef(null);

  useEffect(() => {
    const areaCollectors = areaCollectorsRef.current;

    gsap.fromTo(
      areaCollectors,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 2,
        scrollTrigger: {
          trigger: areaCollectors,
          start: "top-=300px center ",
        },
      }
    );
  });

  return (
    <section className="py-10 @desktop:py-28">
      <ContainerGrid>
        <TitleSection
          subtitle="Colecionadores em Foco"
          title="Principais Colecionadores"
        />

        <div
          className="grid grid-cols-1 @tablet:grid-cols-2 gap-x-4 @desktop:gap-x-8 gap-y-4"
          ref={areaCollectorsRef}>
          {collectors.map(({ image, name, percent, value_btc }, index) => (
            <CardCollectors
              key={index}
              position={index + 1}
              image={image}
              name={name}
              percent={percent}
              value_btc={value_btc}
            />
          ))}
        </div>
      </ContainerGrid>
    </section>
  );
}
