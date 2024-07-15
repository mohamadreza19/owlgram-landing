import Image from "next/image";
import { FunctionComponent, ReactNode, useEffect } from "react";

import Banner1 from "/public/asset/banner/banner-cripto.png";
import Banner2 from "/public/asset/banner/banner-allService.png";
import Banner3 from "/public/asset/banner/banner-free-transfer.png";
import Banner3Mobile from "/public/asset/banner/frame1.png";
import Banner4 from "/public/asset/banner/banner-videoCall.png";
import Banner5 from "/public/asset/banner/banner-check-out-products.png";
import Banner6 from "/public/asset/banner/banner-chat.png";

// Logos
import Mobile from "/public/asset/logos/mobile.svg";
import Translate from "/public/asset/logos/translate.svg";
import Bitcoin from "/public/asset/logos/bitcoin.svg";

import { Container1 } from "../containers";
import { SegmentComponentProps } from "../../shared";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "use-intl";
import { unstable_setRequestLocale } from "next-intl/server";

interface WhyChoseProps extends SegmentComponentProps {}
const elIdtoScroll = "#download";
const WhyChose: FunctionComponent<WhyChoseProps> = ({ id, onView }) => {
  const { ref: ref, inView: inView1 } = useInView({ threshold: 0 });

  const t = useTranslations("index");
  function scrollToDownloadApp() {
    const element = document.querySelector(elIdtoScroll) as HTMLElement;
    element.scrollIntoView();
  }

  useEffect(() => {
    if (inView1) {
      onView();
    }
  }, [inView1]);
  return (
    <Container1 bg="bg-gray-100">
      <div ref={ref} id={id} className="pt-[120px] flex flex-col  ltr">
        <section
          className={`flex  flex-col justify-center items-center animate__animated animation-delay-600 ${
            inView1 && "animate__fadeIn"
          }`}
        >
          <p className="font-normal text-[22px]">
            {t("why-chose.onePlatformForAll")}
          </p>
          <p className="font-bold text-[50px] text-center">
            {t("why-chose.whyChooseOwlegram")}
          </p>
          <p className="text-lg font-light text-center md:w-[733px] w-full">
            {t("why-chose.paragraph1")}
          </p>
        </section>
        <section className="pt-[48px]  flex md:flex-row flex-col items-center flex-wrap gap-y-4 ">
          <div
            className={`grid cs-2:grid-cols-2 mx-auto  gap-4  justify-center animate__animated animation-delay-900 ${
              inView1 && "animate__fadeInUp"
            }`}
          >
            <ImageContainer
              width={Banner2.width}
              height={Banner2.height}
              src={Banner2.src}
            >
              <div className="pt-[24px] ps-[40px] pe-[27px]">
                <Image className="pb-2 " {...Mobile} />
                <Title type="medium"> {t("why-chose.service.service")}</Title>

                <p className="text-[18px] font-light">
                  {t("why-chose.service.paragraph1")}
                </p>
              </div>
            </ImageContainer>
            <ImageContainer
              width={Banner1.width}
              height={Banner1.height}
              src={Banner1.src}
            >
              <div className="pt-[273px] ps-[40px] pe-[27px]">
                <Image className="pb-2 " {...Bitcoin} />
                <Title type="medium"> {t("why-chose.payment.payment")}</Title>

                <p className="text-[18px] font-light">
                  {t("why-chose.payment.paragraph1")}
                </p>
              </div>
            </ImageContainer>
          </div>
          <ImageContainer
            width={Banner3.width}
            height={Banner3.height}
            src={Banner3.src}
            className={`w-full md:block hidden !min-w-full h-[296px]  animate__animated animation-delay-1000 ${
              inView1 && "animate__fadeInUp"
            }`}
          >
            <div className="pt-[104px] ps-[40px] pe-[27px]">
              <Title type="medium"> {t("why-chose.transfer.transfer")}</Title>

              <p className="text-[18px] font-light max-w-[524px]">
                {t("why-chose.transfer.paragraph1")}
              </p>
            </div>
          </ImageContainer>
          <ImageContainer
            width={Banner3Mobile.width}
            height={Banner3Mobile.height}
            src={Banner3Mobile.src}
            className={`w-full  md:hidden  !min-w-full   animate__animated animation-delay-1000 ${
              inView1 && "animate__fadeInUp"
            }`}
          >
            <div className="p-[24px]">
              <Image {...Translate} className="pb-2 " />

              <Title type="medium">{t("why-chose.transfer.transfer")}</Title>

              <p className="text-[18px] font-light max-w-[524px]">
                {t("why-chose.transfer.paragraph1")}
              </p>
            </div>
          </ImageContainer>

          <div
            className={
              "grid cs-2:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto justify-center gap-y-4  gap-x-4"
            }
          >
            <ImageContainer
              width={Banner6.width}
              height={Banner6.height}
              src={Banner6.src}
              className=" max-w-[383px]  max-h-[300px]"
            >
              <div className="pt-[189px] px-[14px] ">
                <Title type="small">
                  {t("why-chose.Chat&Group.Chat&Group")}
                </Title>

                <p className="pt-2 text-[16px] font-light">
                  {t("why-chose.Chat&Group.paragraph1")}
                </p>
              </div>
            </ImageContainer>

            <ImageContainer
              width={Banner5.width}
              height={Banner5.height}
              src={Banner5.src}
              className="pt-[112px] lg:block hidden  ps-[30px] pe-[27px] max-w-[383px]  max-h-[300px]"
            >
              <p className="text-[34px] font-semibold text-white">
                {t("why-chose.productFeatures.productFeatures")}
              </p>
              <button
                onClick={scrollToDownloadApp}
                className="text-white bg-teal2-400 mt-3 ms-auto py-[16px]   px-[26px] flex gap-x-2 justify-center items-center rounded-[9px]"
              >
                {t("why-chose.productFeatures.viewMore")}
                <svg
                  className="md"
                  width="19"
                  height="12"
                  viewBox="0 0 19 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7618 11L17.8809 6M17.8809 6L1.49991 6M17.8809 6L12.7618 1"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </ImageContainer>

            <ImageContainer
              width={Banner4.width}
              height={Banner4.height}
              src={Banner4.src}
              className=" max-w-[383px]  max-h-[300px] pt-[189px] px-[14px] mx-auto cs-2:translate-x-0  lg:translate-x-1/2   translate-x-0"
            >
              <Title type="small">
                {t("why-chose.Voice&VideoCall.Voice&VideoCall")}
              </Title>

              <p className="text-base font-lights">
                {t("why-chose.Voice&VideoCall.paragraph1")}
              </p>
            </ImageContainer>
          </div>
        </section>
      </div>
    </Container1>
  );
};

interface ImageContainerProps {
  width: number;
  height: number;
  src: string;
  children: ReactNode;
  className?: string;
}

const ImageContainer: FunctionComponent<ImageContainerProps> = ({
  height,
  src,
  width,
  children,
  className,
}) => {
  return (
    <div
      style={{
        maxWidth: width + "px",
        maxHeight: height + "px",
        minWidth: width + "px",
        minHeight: height + "px",
        backgroundSize: "100% 100%",
        backgroundImage: `url('${src}')`,
      }}
      className={`cs-1:max-w[100%] !min-w-full    ${className}`}
    >
      {children}
    </div>
  );
};
interface TitleProps {
  children: ReactNode;
  type: "medium" | "small";
}

const Title: FunctionComponent<TitleProps> = ({ children, type }) => {
  switch (type) {
    case "medium":
      return <p className="md:text-[31px] text-[25px] font-bold">{children}</p>;
    case "small":
      return <p className="md:text-[19px] text-[25px] font-bold">{children}</p>;

    default:
      break;
  }
};

export default WhyChose;
