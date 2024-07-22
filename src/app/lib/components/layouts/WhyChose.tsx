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
import ChatLogo from "/public/asset/logos/chat.svg";
import CallLogo from "/public/asset/logos/call.svg";

import { Container1 } from "../containers";
import { SegmentComponentProps } from "../../shared";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "use-intl";
import { unstable_setRequestLocale } from "next-intl/server";

interface WhyChoseProps extends SegmentComponentProps {}
const elIdtoScroll = "#download";
const WhyChose: FunctionComponent<WhyChoseProps> = ({ ...rest }) => {
  const t = useTranslations("index");
  function scrollToDownloadApp() {
    const element = document.querySelector(elIdtoScroll) as HTMLElement;
    element.scrollIntoView();
  }

  return (
    <Container1
      bg="bg-gray-100"
      {...rest}
      childrenCallback={({ inView }) => (
        <div className="pt-[120px] flex flex-col   ltr">
          <section
            className={`flex  flex-col justify-center items-center animate__animated animation-delay-600 ${
              inView && "animate__fadeIn"
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
                inView && "animate__fadeInUp"
              }`}
            >
              <ImageContainer
                width={Banner2.width}
                height={Banner2.height}
                src={t("pic1")}
                type="medium"
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
                src={t("pic4")}
                type="medium"
              >
                <div className="lg:pt-[273px] pt-[170px] ps-[40px] pe-[27px]">
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
              src={t("pic5")}
              className={`w-full cs-2:block hidden !min-w-full h-[296px]  animate__animated animation-delay-1000 ${
                inView && "animate__fadeInUp"
              }`}
              type="long"
            >
              <div className="pt-[23px] ps-[40px] pe-[27px]">
                <Image {...Translate} className="pb-2 " />
                <Title type="medium"> {t("why-chose.transfer.transfer")}</Title>

                <p className="text-[18px] font-light max-w-[524px]">
                  {t("why-chose.transfer.paragraph1")}
                </p>
              </div>
            </ImageContainer>
            <ImageContainer
              type="long"
              width={Banner3Mobile.width}
              height={Banner3Mobile.height}
              src={t("pic13")}
              className={`w-full mx-auto  cs-2:hidden  !min-w-full   animate__animated animation-delay-1000 ${
                inView && "animate__fadeInUp"
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
                "grid cs-2:grid-cols-3 lg:grid-cols-2 grid-cols-1 mx-auto justify-center gap-y-4  gap-x-4"
              }
            >
              <ImageContainer
                type="small"
                width={383}
                height={300}
                src={t("pic2")}
                className=" max-w-[383px]  max-h-[300px]"
              >
                <div className="lg:pt-[131px] pt-[149px]  px-[14px] ">
                  <Image
                    {...ChatLogo}
                    className="pb-2 lg:!w-[50px] lg:!h-[50px] "
                  />
                  <Title type="small">
                    {t("why-chose.Chat&Group.Chat&Group")}
                  </Title>

                  <p className="pt-2 text-[16px] font-light">
                    {t("why-chose.Chat&Group.paragraph1")}
                  </p>
                </div>
              </ImageContainer>

              <ImageContainer
                type="small"
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
                type="small"
                width={383}
                height={300}
                src={t("pic6")}
                className=" max-w-[383px]  max-h-[300px] pt-[131px]  px-[14px] mx-auto cs-2:translate-x-0  lg:translate-x-1/2   translate-x-0"
              >
                <Image
                  {...CallLogo}
                  className="pb-2 lg:!w-[50px] lg:!h-[50px] "
                />
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
      )}
    />
  );
};

interface ImageContainerProps {
  width: number;
  height: number;
  src: string;
  children: ReactNode;
  className?: string;
  type: "medium" | "long" | "small";
}

const ImageContainer: FunctionComponent<ImageContainerProps> = ({
  height,
  src,
  width,
  children,
  className,
  type,
}) => {
  let Add_class = "";

  switch (type) {
    case "long":
      Add_class = ` cs-2:!min-w-[1196px] cs-2:!min-h-[296px] cs-2:!max-w-[1196px] cs-2:!max-h-[296px] | lg:!min-w-[592px] lg:!min-h-[536px] lg:!max-w-[592px] lg:!max-h-[536px]`;
      break;
    case "medium":
      Add_class = ` cs-2:!min-w-[592px] cs-2:!min-h-[536px] cs-2:!max-w-[592px] cs-2:!max-h-[536px] | lg:!min-w-[592px] lg:!min-h-[536px] lg:!max-w-[592px] lg:!max-h-[536px]`;
      break;
    case "small":
      Add_class = ` cs-2:!min-w-[383px] cs-2:!min-h-[300px] cs-2:!max-w-[383px] cs-2:!max-h-[300px] | lg:!min-w-[383px] lg:!min-h-[300px] lg:!max-w-[383px] lg:!max-h-[300px] |`;
      break;
  }
  return (
    <div
      style={{
        // maxWidth: width + "px",
        // maxHeight: height + "px",
        // minWidth: width + "px",
        // minHeight: height + "px",
        backgroundSize: "100% 100%",
        backgroundImage: `url('${src}')`,
      }}
      className={`overflow-hidden |${Add_class}  |  cs-1:!max-w[100%]  | sm:!min-w-[354px] sm:!min-h-[400px] sm:!max-w-[354px] sm:!max-h-[400px]  ${className}`}
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
