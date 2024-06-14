import { FunctionComponent, useEffect } from "react";

interface DownloadAppProps {}

import playStore from "/public/asset/banner/App-download-playstore.png";
import appleStore from "/public/asset/banner/App-download-applestore.png";
import appChat from "/public/asset/banner/download-app-chat.png";

import chat1 from "/public/asset/banner/chat1.svg";
import voiceChat from "/public/asset/banner/voice-chat1.png";
import chatContainer1 from "/public/asset/banner/container-1.png";
import chatContainer2 from "/public/asset/banner/container-2.png";
import Image from "next/image";
import { Container1 } from "../containers";
import { SegmentComponentProps } from "../../shared";
import { useInView } from "react-intersection-observer";

interface DownloadAppProps extends SegmentComponentProps {}

const DownloadApp: FunctionComponent<DownloadAppProps> = ({ id, onView }) => {
  const { ref: ref, inView: inView1 } = useInView({ threshold: 0 });
  useEffect(() => {
    if (inView1) {
      onView();
    }
  }, [inView1]);
  return (
    <Container1 bg="bg-gray-100">
      <div ref={ref} id={id} className="flex pt-52 flex-col ">
        <section
          className={`mx-auto w-[543px] flex flex-col items-center animate__animated ${
            inView1 && "animate__bounce"
          }`}
        >
          <div className="font-bold text-[48px] text-nowrap">
            Get The Owl mobile App
          </div>
          <div className="pt-5 text-center">
            To the home cook, having the right pots and pans is essential for a
            properly functioning kitchen
          </div>
        </section>
        <section className="flex justify-center pt-5">
          <Image alt="playStore" {...playStore} />
          <Image alt="appleStore" {...appleStore} />
        </section>
        <section className="w-full flex justify-center relative">
          <Image unoptimized alt="appChat" {...appChat} />
          <Image
            className="absolute left-[19%] top-[40%]"
            // fill
            unoptimized
            alt="chat1"
            // src={chat1.src}

            {...chat1}
          />
          <Image
            className="absolute max-w-[330px] max-h-[97px] right-[49%] top-[57%] object-fill"
            unoptimized
            alt="voiceChat"
            // src={chat1.src}

            {...voiceChat}
          />
          <div
            className={`absolute top-[33%] right-[16%] w-[265px] h-[57px] flex items-center justify-center  bg-container-1 bg-no-repeat bg-cover drop-shadow-xl text-sm animate__animated animation-delay-1000 ${
              inView1 && "animate__slideInRight"
            }`}
          >
            Hi, Mostafa! How your day going?
          </div>
          <div
            className={`absolute  right-[8%] top-[50%] w-[236px]  h-[55px] flex items-center justify-center  bg-container-2 bg-no-repeat bg-cover drop-shadow-xl text-sm text-white animate__animated animation-delay-900  ${
              inView1 && "animate__slideInRight"
            }`}
          >
            You know how it goes ....
          </div>
        </section>
      </div>
    </Container1>
  );
};

export default DownloadApp;
