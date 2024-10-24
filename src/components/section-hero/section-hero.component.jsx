import { ContainerGrid } from "../container.component";
import { AreaText } from "./area-text";

import { CardsHero } from "./cards-hero.component";

export function SectionHero() {
  return (
    <section className="overflow-hidden pt-36 bg-hero-pattern bg-no-repeat">
      <ContainerGrid className="flex flex-col items-center">
        <AreaText />
        <CardsHero />
        <div className="w-full border-t border-white border-opacity-5 mt-10 @desktop:mt-36"></div>
      </ContainerGrid>
    </section>
  );
}
