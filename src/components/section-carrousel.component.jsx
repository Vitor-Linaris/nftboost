"use client";

import { CarrouselCards } from "./carrousel-cards.component";
import { ContainerGrid } from "./container.component";
import { TitleSection } from "./title-section.component";

export function SectionCarrousel({ subtitle, title, data }) {
  return (
    <section className="py-10 @desktop:py-28">
      <ContainerGrid className="px-0 @desktop:px-3">
        <TitleSection subtitle={subtitle} title={title} />

        <CarrouselCards data={data} />
      </ContainerGrid>
    </section>
  );
}
