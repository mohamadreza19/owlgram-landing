import { FunctionComponent, useEffect } from "react";

interface DownloadAppProps {}

import playStore from "/public/asset/banner/App-download-playstore.png";
import appleStore from "/public/asset/banner/App-download-applestore.png";
import appChat from "/public/asset/banner/download-app-chat.png";
import appChatSmall from "/public/asset/banner/download-app-chat-small.png";

import chat1 from "/public/asset/banner/chat1.svg";
import voiceChat from "/public/asset/banner/voice-chat1.png";
import container_1 from "/public/asset/banner/container-1.png";
import container_2 from "/public/asset/banner/container-2.png";
import Image from "next/image";
import { Container1 } from "../containers";
import { SegmentComponentProps } from "../../shared";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import { AnimatedText } from "../text-container";
import { useSelector } from "react-redux";

import { useQuery } from "@tanstack/react-query";
import { ApiCallService, useLocale } from "../../services";
import { getLocale } from "../../features/locale";
import Link from "next/link";
import { unstable_setRequestLocale } from "next-intl/server";

interface DownloadAppProps extends SegmentComponentProps {}

const DownloadApp: FunctionComponent<DownloadAppProps> = ({ id, onView }) => {
  const t = useTranslations("index");
  const { ref: ref, inView: inView1 } = useInView({ threshold: 0 });
  const locale = useLocale();
  const osDownloads = useQuery({
    queryKey: ["downloads", locale.id],
    queryFn: () => ApiCallService.getOsDownloadsByIdLanguageId(locale.id),
  });
  useEffect(() => {
    if (inView1) {
      onView();
    }
  }, [inView1]);

  return (
    <Container1 bg="bg-gray-100">
      <div ref={ref} id={id} className="flex pt-52 flex-col md:pb-0 pb-8">
        <section
          className={`mx-auto md:w-[543px] w-full flex flex-col items-center animate__animated ${
            inView1 && "animate__bounce"
          }`}
        >
          <div className="font-bold text-[48px] md:text-nowrap text-center">
            {t("download-app.getTheOwlMobileApp")}
          </div>
          <div className="pt-5 text-center leading-10">
            To the home cook, having the right pots and pans is essential for a
            properly functioning kitchen
          </div>
        </section>
        <section className="flex flex-wrap md:flex-row flex-col gap-[24px]  items-center justify-center pt-5">
          {osDownloads.data &&
            osDownloads.data.map((os, index) => (
              <Link
                key={index}
                href={os.link || ""}
                className="flex  items-center py-2 w-[230px] min-w-[230px] h-[75px] max-w-[230px]   px-[20px]  bg-[#FFFFFF] rounded-[104px] overflow-hidden"
              >
                <Image src={os.image} width={47} height={47} alt={"os"} />
                <div className="w-fit h-fit ps-3 text-nowrap">
                  
                  <p className="text-base font-light">
                    {t("download-app.downloadOnThe")}
                  </p>
                  <p className="text-[21px] font-bold text-center">
                    {os.product}
                  </p>
                </div>
              </Link>
            ))}
          {/* <div
            style={{
              width: playStore.width,
              height: playStore.height,
              backgroundImage: `url('${playStore.src}')`,
            }}
            className="pl-[75px] pr-[20px] flex justify-center items-center flex-col"
          >
            <p className="text-base font-light">
              {t("download-app.downloadOnThe")}
            </p>
            <p className="text-[21px] font-bold">Google play</p>
          </div>
          <div
            style={{
              width: appleStore.width,
              height: appleStore.height,
              backgroundImage: `url('${appleStore.src}')`,
            }}
            className="pl-[75px] pr-[20px] flex justify-center items-center flex-col"
          >
            <p className="text-base font-light">Download on the </p>
            <p className="text-[21px] font-bold">Apple store</p>
          </div> */}
        </section>
        <section className="w-full flex justify-center relative">
          <Image
            className="md:block hidden"
            unoptimized
            alt="appChat"
            {...appChat}
          />
          <Image
            className="md:hidden block"
            unoptimized
            alt="appChatSmall"
            {...appChatSmall}
          />
          <Image
            className="absolute md:left-[19%] left-[0%]  top-[28%]"
            // fill
            unoptimized
            alt="chat1"
            // src={chat1.src}

            {...chat1}
          />
          <Image
            className="absolute max-w-[330px] max-h-[97px] md:right-[49%] right-[19%] md:top-[57%] top-[84%] object-fill"
            unoptimized
            alt="voiceChat"
            // src={chat1.src}

            {...voiceChat}
          />
          <div
            style={{ backgroundImage: `url(${container_1.src})` }}
            className={`absolute md:top-[33%] top-[50%] md:right-[16%] right-[0%] w-[265px] h-[57px] flex items-center justify-center  bg-no-repeat bg-cover drop-shadow-xl text-sm animate__animated animation-delay-1000 ${
              inView1 && "animate__slideInRight"
            }`}
          >
            <AnimatedText text={t("text1")} delay={1000} />
          </div>
          <div
            style={{ backgroundImage: `url(${container_2.src})` }}
            className={`absolute  md:right-[8%] md:top-[50%] top-[70%] right-0 w-[236px]  h-[55px] flex items-center justify-center  bg-no-repeat bg-cover drop-shadow-xl text-sm text-white animate__animated animation-delay-900  ${
              inView1 && "animate__slideInRight"
            }`}
          >
            <AnimatedText text={t("text2")} delay={2500} />
          </div>
        </section>
      </div>
    </Container1>
  );
};

export default DownloadApp;
