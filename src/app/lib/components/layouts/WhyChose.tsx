import Image from "next/image";
import { FunctionComponent, useEffect } from "react";

import Banner1 from "/public/asset/banner/banner-cripto.png";
import Banner2 from "/public/asset/banner/banner-allService.png";
import Banner3 from "/public/asset/banner/banner-free-transfer.png";
import Banner4 from "/public/asset/banner/banner-videoCall.png";
import Banner5 from "/public/asset/banner/banner-check-out-products.png";
import Banner6 from "/public/asset/banner/banner-chat.png";

interface WhyChoseProps {}

const WhyChose: FunctionComponent<WhyChoseProps> = () => {
  return (
    <div
      className="pt-[120px] flex flex-col 
    "
    >
      <section className="flex  flex-col justify-center items-center">
        <p className="font-normal text-[22px]">One platform for All </p>
        <p className="font-bold text-[50px]">Why Choose owlegram ?</p>
        <p className="text-lg font-light text-center w-[733px]">
          To the home cook, having the right pots and pans is essential for a
          properly functioning kitchen. You may be wondering what the best pot
          for vegetables is
        </p>
      </section>
      <section className="pt-[48px]  flex flex-wrap gap-y-4 ">
        <div className="grid grid-cols-2 gap-x-4">
          <div className=" max-w-[590px]  max-h-[536px]">
            <Image
              unoptimized
              src={Banner2.src}
              fill
              className="!static"
              alt="banner"
            />
          </div>
          <div className=" max-w-[590px]  max-h-[536px]">
            <Image
              unoptimized
              src={Banner1.src}
              fill
              className="!static"
              alt="banner"
            />
          </div>
        </div>

        <div className="w-full min-w-full h-[296px]">
          <Image
            unoptimized
            src={Banner3.src}
            fill
            className="!static"
            alt="banner"
          />
        </div>
        <div className="grid grid-cols-3 gap-x-4">
          <div className=" max-w-[383px]  max-h-[300px]">
            <Image
              unoptimized
              src={Banner6.src}
              fill
              className="!static"
              alt="banner"
            />
          </div>

          <div className=" max-w-[383px]  max-h-[300px]">
            <Image
              unoptimized
              src={Banner5.src}
              fill
              className="!static"
              alt="banner"
            />
          </div>
          <div className=" max-w-[383px]  max-h-[300px]">
            <Image
              unoptimized
              src={Banner4.src}
              fill
              className="!static"
              alt="banner"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChose;
