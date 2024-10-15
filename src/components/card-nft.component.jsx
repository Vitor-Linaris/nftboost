import Image from "next/image";

import ImageNft01 from "@/assets/img-neft/01.jpg";
import IconHeart from "@/assets/icon-heart.svg";
import IconVerify from "@/assets/verify.svg";
import IconETH from "@/assets/icon-eth.svg";
import IconClock from "@/assets/icon-clock.svg";

export function CardNFT() {
  return (
    <div>
      <div>
        <Image src={ImageNft01} alt="Nft 01" />
        <div>
          <Image src={IconHeart} alt="Icon Heart" />
          <small>0</small>
        </div>
      </div>
      <div>
        <h4>
          Cartoon Collection
          <Image src={IconVerify} alt="Icon Verify" />
        </h4>
        <h3>Cat #221</h3>

        <div>
          <div>
            <span>Preço atual</span>
            <h3>
              <Image src={IconETH} alt="Icon ETH" /> 0.0721 BTC
            </h3>
          </div>
          <h5>R$602,02</h5>
        </div>

        <button>Buy now</button>

        <div>
          <Image src={IconClock} alt="Icon Clock" />
          <p>Fim em 4h 8m 22s</p>
        </div>
      </div>
    </div>
  );
}
