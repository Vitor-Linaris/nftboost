import { SectionCarrousel } from "@/components/section-carrousel.component";
import { SectionHero } from "@/components/section-hero/section-hero.component";

import Thumb01 from "@/assets/img-neft/01.jpg";
import Thumb02 from "@/assets/img-neft/02.jpg";
import Thumb03 from "@/assets/img-neft/03.jpg";
import Thumb04 from "@/assets/img-neft/04.jpg";
import { SectionCollectors } from "@/components/section-collectors";
import { SectionBanner } from "@/components/section-banner.component";

const featuredCollections = [
  {
    name: "Cat #221",
    thumbnail: Thumb01,
    value: "0.0721",
    value_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumbnail: Thumb02,
    value: "0.0721",
    value_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumbnail: Thumb03,
    value: "0.0721",
    value_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumbnail: Thumb04,
    value: "0.0721",
    value_brl: "602,02",
  },
];

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionCarrousel
        subtitle="Destaque em Coleção"
        title="Coleções Notáveis"
        data={featuredCollections}
      />
      <hr className="border-t border-white border-opacity-5 max-w-grid mx-auto" />
      <SectionCarrousel
        subtitle="Seleção Mensal"
        title="Destaque do Mês"
        data={featuredCollections}
      />
      <hr className="border-t border-white border-opacity-5 max-w-grid mx-auto" />

      <SectionCollectors />

      <hr className="border-t border-white border-opacity-5 max-w-grid mx-auto" />

      <SectionCarrousel
        subtitle="Em Tendência"
        title="Tendência"
        data={featuredCollections}
      />

      <SectionBanner />
    </>
  );
}
