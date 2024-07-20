import { FC, FunctionComponent, ReactNode, useEffect, useState } from "react";

interface ServicesProps {}

import owlgramLogo from "/public/main-logo.svg";

import Image, { StaticImageData } from "next/image";
import { Container1 } from "../containers";
import { SegmentComponentProps, Service, ServicesResponse } from "../../shared";

import { useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";

import { ApiCallService, useLocale } from "../../services";

import Solid from "/public/asset/service/mobile-button-solid-1.svg";

interface ServicesProps extends SegmentComponentProps {}

const Services: FunctionComponent<ServicesProps> = ({ ...rest }) => {
  const locale = useLocale();
  const { data } = useQuery({
    queryKey: ["services", locale.id],
    queryFn: () => ApiCallService.getServiceByIdLanguageId(locale.id),
  });
  const [list1, setList1] = useState<ServicesResponse>([]);
  const [list2, setList2] = useState<ServicesResponse>([]);
  const [list3, setList3] = useState<ServicesResponse>([]);
  const t = useTranslations("index");

  useEffect(() => {
    if (data && data.length) {
      let counter = 1;

      const newList1: ServicesResponse = [];
      const newList2: ServicesResponse = [];
      const newList3: ServicesResponse = [];

      data.forEach((item, index) => {
        switch (counter) {
          case 1:
            newList1.push(item);
            break;
          case 2:
            newList2.push(item);
            break;
          case 3:
            newList3.push(item);
            break;
        }

        counter = counter === 3 ? 1 : counter + 1;

        if (
          newList2.length >= newList3.length ||
          newList2.length >= newList1.length
        ) {
          const lastItem = newList2.pop();
          if (lastItem) {
            newList3.push(lastItem);
          }
        }

        setList1(newList1);
        setList2(newList2);
        setList3(newList3);

        // Ensure list2 has fewer items
      });
    }

    return () => {
      setList1([]);
      setList2([]);
      setList3([]);
    };
  }, [data?.length, locale.id]);

  const ServiceBox: FC = () => {
    return (
      <>
        <div className="flex  flex-col gap-4">
          {list1.map((item, index) => {
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
        <div className="flex  flex-col gap-4">
          {list2.map((item, index) => {
            if (index === list2.length - 1) {
              return (
                <>
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
                  <CustomContainer
                    imageToBackground={{
                      height: 108,
                      width: 108,
                      src: "",
                      blurDataURL: "",
                      blurHeight: 108,
                      blurWidth: 108,
                    }}
                    type="big"
                    bg="bg-teal-400"
                  >
                    <Image className="absolute top-0 left-[18px]" {...Solid} />
                    <Image {...owlgramLogo} className="!w-[239px] !h-[151px]" />
                    <p className="text-[31px] font-semibold text-white pt-2">
                      {t("services.owelgramService")}
                    </p>
                  </CustomContainer>
                </>
              );
            } else
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
        <div className="flex  flex-col gap-4">
          {list3.map((item, index) => {
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
      </>
    );
  };

  if (data)
    return (
      <Container1
        bg="bg-gray-100"
        {...rest}
        childrenCallback={({ inView }) => (
          <>
            <section
              className={`pt-52 flex flex-col items-center  animate__animated ${
                inView && "   animate__backInRight"
              } `}
            >
              <p className="font-extrabold text-[50px] text-center">
                {t("services.owelgramService")}
              </p>
              <p className="text-lg font-light text-center max-w-[723px] leading-10">
                {t("services.paragraph1")}
              </p>
            </section>
            <div className="  w-full   flex justify-center cs-1.9:items-stretch  items-center cs-1.9:flex-row flex-wrap flex-col gap-4">
              <ServiceBox />
            </div>
          </>
        )}
      ></Container1>
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
          " md:w-[383px]   w-full h-[330px] flex flex-col mb-auto  items-start gap-x-[28px] rounded-[20px] relative pt-[23px] ps-[19px] pe-[15px]  overflow-hidden " +
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
          "md:w-[383px] w-full h-[551px] cs-1.9:flex hidden flex-col   items-center justify-center relative gap-x-[28px] rounded-[20px] relative pt-[23px] ps-[19px] pe-[15px] !bg-teal2-500 " +
          "bg"
        }
      >
        {children}
      </div>
    );
};

export default Services;
