import Image from "next/image";

import IconVerify from "@/assets/verify.svg";
import ImgNFT from "@/assets/img-neft/01.jpg";
import IconETH from "@/assets/icon-eth.svg";

export function CardCollectors() {
  return (
    <div className="bg-white bg-opacity-[0.01] py-4 px-6 flex items-center justify-between rounded-full border border-white border-opacity-5 w-full max-w-card-collector">
      <div className="flex items-center gap-6">
        <strong className="font-semibold">1</strong>
        <div className="flex items-center gap-4">
          <div className="relative w-10 h-10">
            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center border-2 border-white border-opacity-5">
              <Image
                src={ImgNFT}
                alt="Image NFT"
                className="w-full h-full  object-cover"
              />
            </div>
            <Image
              src={IconVerify}
              alt="Icon Verify"
              className="absolute -bottom-1 -right-1"
            />
          </div>
          <div className="space-y-1">
            <strong>Lorem Ipsum</strong>
            <p className="flex items-center gap-1 text-sm text-white text-opacity-70">
              Preço mínimo
              <span className="flex items-center gap-1 font-semibold text-sm">
                <Image src={IconETH} alt="Etherium" /> 0.721 BTC
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-1 text-right">
        <strong className="text-green-primary font-bold">+20%</strong>
        <span className="flex items-center gap-1 font-semibold text-sm">
          <Image src={IconETH} alt="Etherium" /> 0.721 BTC
        </span>
      </div>
    </div>
  );
}
