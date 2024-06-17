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
import { SegmentComponentProps } from "../../shared";
import { useInView } from "react-intersection-observer";

interface ServicesProps extends SegmentComponentProps {}

const Services: FunctionComponent<ServicesProps> = ({ id, onView }) => {
  const { ref: ref, inView: inView1 } = useInView({ threshold: 0 });
  useEffect(() => {
    if (inView1) {
      onView();
    }
  }, [inView1]);
  return (
    <Container1 bg="bg-gray-100">
      <div ref={ref} id={id} className="w-full pt-52">
        <section
          className={` flex flex-col items-center  animate__animated ${
            inView1 && "   animate__backInRight"
          } `}
        >
          <p className="font-extrabold text-[50px] text-center">
            Owelgram Service
          </p>
          <p className="text-lg font-light text-center max-w-[723px] leading-10">
            To the home cook, having the right pots and pans is essential for a
            properly functioning kitchen. You may be wondering what the best pot
            for vegetables is
          </p>
        </section>
        <section
          className={`grid  cs-1:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-x-4`}
        >
          <div
            className={`w-full flex flex-col justify-center items-center gap-y-4 md:pt-0 mt-4 animate__animated animation-delay-1000 ${
              inView1 && "animate__slideInLeft"
            }`}
          >
            <CustomContainer
              imageToBackground={placeholderAcademy}
              bg="bg-white"
              type="medium"
            >
              <Image alt="service" {...academy} />
              <div className="z-[2]">
                <p className="text-[31px] font-bold mt-4">Academy</p>
                <p className="text-[17px] font-light">
                  To the home cook, having the right pots and pans is essential
                  for a properly functioning kitchen
                </p>
              </div>
            </CustomContainer>
            <CustomContainer
              imageToBackground={placeholderShop}
              bg="bg-white"
              type="small"
            >
              <Image alt="service" {...shop} />
              <div className="z-[2]">
                <p className="text-[31px] font-bold mt-4">Shop</p>
                <p className="text-[17px] font-light">
                  To the home cook, having the right pots and pans is essential
                  for a properly functioning kitchen
                </p>
              </div>
            </CustomContainer>
            <CustomContainer
              imageToBackground={placeholderTour}
              bg="bg-white"
              type="medium"
            >
              <Image alt="service" {...tour} />
              <div className="z-[2]">
                <p className="text-[31px] font-bold mt-4">Tour</p>
                <p className="text-[17px] font-light">
                  To the home cook, having the right pots and pans is essential
                  for a properly functioning kitchen
                </p>
              </div>
            </CustomContainer>
          </div>
          <div
            className={`w-full flex flex-col justify-center items-center gap-y-4 md:pt-0 mt-4 animate__animated animation-delay-900 ${
              inView1 && "animate__fadeInUp"
            }`}
          >
            <CustomContainer
              imageToBackground={placeholderPerson}
              bg="bg-white"
              type="medium"
            >
              <Image alt="service" {...person} />
              <div className="z-[2]">
                <p className="text-[31px] font-bold mt-4">Advister</p>
                <p className="text-[17px] font-light">
                  To the home cook, having the right pots and pans is essential
                  for a properly functioning kitchen
                </p>
              </div>
            </CustomContainer>
            <CustomContainer
              imageToBackground={mobileButtonSolid1}
              bg="bg-teal-400"
              type="big"
            >
              <div className="flex flex-col items-center relative bottom-5">
                <Image
                  alt="owlgramLogo"
                  className="min-w-[250px] min-h-[219px]"
                  {...owlgramLogo}
                />
                <div className="z-[2]">
                  <p className="text-[31px] font-semibold mt-4 text-white">
                    OWLEGRAM Service
                  </p>
                </div>
              </div>
            </CustomContainer>
          </div>
          <div
            className={`w-full flex flex-col justify-center items-center gap-y-4 md:pt-0 mt-4 animate__animated animation-delay-1000 ${
              inView1 && "animate__slideInRight"
            }`}
          >
            <CustomContainer
              imageToBackground={electricity}
              bg="bg-white"
              type="small"
            >
              <Image alt="service" {...service} />
              <div className="z-[2]">
                <p className="text-[31px] font-bold mt-4">Service</p>
                <p className="text-[17px] font-light">
                  To the home cook, having the right pots and pans is essential
                  for a properly functioning kitchen
                </p>
              </div>
            </CustomContainer>
            <CustomContainer
              imageToBackground={placeholderCrypto}
              bg="bg-white"
              type="medium"
            >
              <Image alt="service" {...crypto} />
              <div className="z-[2]">
                <p className="text-[31px] font-bold mt-4">Crypto</p>
                <p className="text-[17px] font-light">
                  To the home cook, having the right pots and pans is essential
                  for a properly functioning kitchen
                </p>
              </div>
            </CustomContainer>
            <CustomContainer
              imageToBackground={placeholderTranport}
              bg="bg-white"
              type="medium"
            >
              <Image alt="service" {...transport} />
              <div className="z-[2]">
                <p className="text-[31px] font-bold mt-4">Tranport</p>
                <p className="text-[17px] font-light">
                  To the home cook, having the right pots and pans is essential
                  for a properly functioning kitchen
                </p>
              </div>
            </CustomContainer>
          </div>
        </section>
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
          "md:w-[383px] w-full h-[216px] flex justify-center items-center gap-x-[28px] rounded-[20px] relative ps-[19px] pe-[15px]  " +
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
          "md:w-[383px] w-full h-[330px] flex flex-col  items-start gap-x-[28px] rounded-[20px] relative pt-[23px] ps-[19px] pe-[15px]  " +
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
