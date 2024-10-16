import Image from "next/image";

import IconVerify from "@/assets/verify.svg";
import ImgNFT from "@/assets/img-neft/01.jpg";
import IconETH from "@/assets/icon-eth.svg";

export function CardCollectors() {
  return (
    <div>
      <div>
        <strong>1</strong>
        <div>
          <div>
            <div>
              <Image src={ImgNFT} alt="Image NFT" />
            </div>
            <Image src={IconVerify} alt="Icon Verify" />
          </div>
          <div>
            <strong>Lorem Ipsum</strong>
            <p>
              Preço mínimo{" "}
              <span>
                <Image src={IconETH} alt="Etherium" /> 0.721 BTC
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
