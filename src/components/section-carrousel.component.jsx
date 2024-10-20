"use client";

import { CarrouselCards } from "./carrousel-cards.component";
import { ContainerGrid } from "./container.component";
import { TitleSection } from "./title-section.component";

export function SectionCarrousel() {
  return (
    <section>
      <ContainerGrid>
        <TitleSection
          subtitle="Destaque em Coleções"
          title="Coleções notáveis"
        />

        <CarrouselCards />
      </ContainerGrid>
    </section>
  );
}
