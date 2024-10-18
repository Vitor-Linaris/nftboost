import Image from "next/image";
import { ContainerGrid } from "./container.component";

import Logo from "@/assets/logo.svg";

const footerNav = [
  {
    titleMenu: "NFT Boost®",
    items: ["Download", "NFTs", "Ranks", "FAQ"],
  },
  {
    titleMenu: "Links importantes",
    items: ["About us", "Questions", "Press", "Contact us", "Legal"],
  },
];

export function Footer() {
  return (
    <footer>
      <ContainerGrid>
        <div>
          <Image src={Logo} alt="Logo NFTBoost" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <button className="bg-blue-primary py-4 px-7 rounded-full font-medium hover:bg-blue-900 transition-all ease-linear">
            Conectar carteira
          </button>
        </div>
        <div>
          {footerNav.map(({ titleMenu, items }) => (
            <div key={`Meu-${titleMenu}`}>
              <strong>{titleMenu}</strong>
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ContainerGrid>
    </footer>
  );
}
