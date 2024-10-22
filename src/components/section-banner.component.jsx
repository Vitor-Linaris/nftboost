import Image from "next/image";

import { ContainerGrid } from "./container.component";

import GooglePlay from "@/assets/apple.svg";
import AppleStore from "@/assets/google.svg";

export function SectionBanner() {
  return (
    <section>
      <ContainerGrid>
        <div>
          <h2>Abra as Portas para a Próxima Revolução Digital!</h2>
          <p>
            Descubra, Adquira e Possua os NFTs Mais Valiosos do Universo
            Digital. Sua Oportunidade, Sua História
          </p>
          <div>
            <Image src={GooglePlay} alt="GooglePlay" />
            <Image src={AppleStore} alt="AppleStore" />
          </div>
        </div>
      </ContainerGrid>
    </section>
  );
}
