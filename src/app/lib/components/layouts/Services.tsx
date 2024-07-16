import { FunctionComponent, ReactNode, useEffect } from "react";

interface ServicesProps {}
import electricity from "/public/asset/service/electricity.svg";
import placeholderPerson from "/public/asset/service/placeholder-person.svg";
import placeholderAcademy from "/public/asset/service/academy-placeholder.svg";
import placeholderCrypto from "/public/asset/service/crypto-placeholder.svg";
import mobileButtonSolid1 from "/public/asset/service/mobile-button-solid-1.svg";
import placeholderShop from "/public/asset/service/shop-placeholder.svg";
import placeholderTranport from "/public/asset/service/transport-placeholder.svg";
import placeholderTour from "/public/asset/service/tour-placeholder.svg";

///
import service from "/public/asset/service/service.svg";
import person from "/public/asset/service/person.png";
import academy from "/public/asset/service/academy.svg";
import crypto from "/public/asset/service/crypto.svg";
import owlgramLogo from "/public/main-logo.svg";
import shop from "/public/asset/service/shop.svg";
import transport from "/public/asset/service/transport.svg";
import tour from "/public/asset/service/tour.svg";
import Image, { StaticImageData } from "next/image";
import { Container1 } from "../containers";
import { SegmentComponentProps, ServicesResponse } from "../../shared";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getLocale } from "../../features/locale";
import { ApiCallService, useLocale } from "../../services";
import { unstable_setRequestLocale } from "next-intl/server";

interface ServicesProps extends SegmentComponentProps {}

const Services: FunctionComponent<ServicesProps> = ({ id, onView }) => {
  const { ref: ref, inView: inView1 } = useInView({ threshold: 0 });
  const locale = useLocale();
  const services = useQuery({
    queryKey: ["services", locale.id],
    queryFn: () => ApiCallService.getServiceByIdLanguageId(locale.id),
  });

  const t = useTranslations("index");
  useEffect(() => {
    if (inView1) {
      onView();
    }
  }, [inView1]);
  if (services.data)
    return (
      <Container1 bg="bg-gray-100">
        <section
          className={`pt-52 flex flex-col items-center  animate__animated ${
            inView1 && "   animate__backInRight"
          } `}
        >
          <p className="font-extrabold text-[50px] text-center">
            {t("services.owelgramService")}
          </p>
          <p className="text-lg font-light text-center max-w-[723px] leading-10">
            {t("services.paragraph1")}
          </p>
        </section>
        <div
          ref={ref}
          id={id}
          className="w-full justify-center items-center flex flex-wrap gap-4"
        >
          {services.data.map((item, index) => {
            return (
              <CustomContainer
                key={index}
                imageToBackground={{
                  height: 108,
                  width: 108,
                  src: item.media,
                  blurDataURL: item.media,
                  blurHeight: 108,
                  blurWidth: 108,
                }}
                type="medium"
                bg="bg-white"
              >
                <p className="text-lg font-light  pt-[120px] text-black z-[2]">
                  {item.content}
                </p>
              </CustomContainer>
            );
          })}
        </div>
      </Container1>
    );
};

interface CustomContainerProps {
  type: "small" | "medium" | "big";
  bg: "bg-white" | "bg-teal-400";
  children: ReactNode;
  imageToBackground: StaticImageData;
}

const CustomContainer: FunctionComponent<CustomContainerProps> = ({
  type,
  children,
  bg,
  imageToBackground,
}) => {
  if (type === "small")
    return (
      <div
        className={
          " md:w-[383px] w-full h-[216px] flex justify-center items-center gap-x-[28px] rounded-[20px] relative ps-[19px] pe-[15px] " +
          bg
        }
      >
        <Image
          className="absolute -right-1 top-3"
          alt="imageToBackground"
          {...imageToBackground}
        />
        {children}
      </div>
    );
  if (type === "medium")
    return (
      <div
        className={
          " md:w-[383px] w-full h-[330px] flex flex-col  items-start gap-x-[28px] rounded-[20px] relative pt-[23px] ps-[19px] pe-[15px]  overflow-hidden " +
          bg
        }
      >
        <div className="flex justify-between w-full absolute">
          <Image className="" alt="imageToBackground" {...imageToBackground} />
          <Image
            className="me-6 relative bottom-4  grayscale opacity-[0.10] scale-[2.3]"
            alt="imageToBackground"
            {...imageToBackground}
          />
        </div>

        {children}
      </div>
    );
  if (type === "big")
    return (
      <div
        className={
          "md:w-[383px] w-full h-[551px] flex flex-col   items-center justify-center gap-x-[28px] rounded-[20px] relative pt-[23px] ps-[19px] pe-[15px] !bg-teal2-500 " +
          "bg"
        }
      >
        <Image
          className="absolute left-[18px] top-0"
          alt="imageToBackground"
          {...imageToBackground}
        />
        {children}
      </div>
    );
};

export default Services;
