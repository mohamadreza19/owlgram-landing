import Image from "next/image";
import { FunctionComponent, useEffect, FC } from "react";
import { Container1 } from "../containers";
import { IntlParamsI, SegmentComponentProps } from "../../shared";
import { useInView } from "react-intersection-observer";

import uaeFlag from "/public/asset/flag/uae.svg";
import container_1 from "/public/asset/banner/container-1.png";
import container_2 from "/public/asset/banner/container-2.png";

interface ExperienceProps extends SegmentComponentProps {}

import BigPhone from "/public/asset/banner/big-phone.png";
import { useTranslations } from "next-intl";
import { ApiCallService, useGetCurrentLanguageBasedUrl } from "../../services";
import { AnimatedText } from "../text-container";
import { unstable_setRequestLocale } from "next-intl/server";
import { useQuery } from "@tanstack/react-query";

const Experience: FunctionComponent<ExperienceProps> = ({
  id,
  appHeaderRef,
  onView,
  languages,
}) => {
  const { ref: ref, inView: inView1 } = useInView({ threshold: 0 });

  const t = useTranslations("index");
  const currentLang = useGetCurrentLanguageBasedUrl({});
  const { data: userData } = useQuery({
    queryKey: ["userData", currentLang],
    queryFn: () => ApiCallService.getUserInfo(),
  });

  useEffect(() => {
    if (inView1) {
      onView();
      window.scrollTo(0, 0);
    }
  }, [inView1]);
  const CurrentLang: FC<{ src: string }> = ({ src }) => {
    return (
      <Image
        className="rounded-full min-w-6 min-h-6 max-w-6 max-h-6 object-cover"
        src={src}
        width={24}
        height={24}
        alt="flag"
        unoptimized
      />
    );
  };

  return (
    <Container1 bg="bg-gray-100">
      <div
        id={id}
        ref={ref}
        className=" w-full flex flex-col justify-center items-center pt-8"
      >
        <section
          className={`md:w-[572px] w-full flex flex-col items-center animate__animated animation-delay-1000 ${
            inView1 && "animate__fadeIn"
          }`}
        >
          <div className="w-fit flex gap-x-2 py-1 px-2 bg-white rounded-3xl">
            {userData?.flag && <CurrentLang src={userData?.flag} />}

            {/* <p className="text-lg">{t("experience.UnitedArabEmirates")}</p> */}
            <p className="text-lg">{userData?.countryNameInEn}</p>
          </div>
          <div>
            <p className="md:text-[56px] text-[35px] font-normal text-center break-all">
              {t("experience.UseOurNewPlatform")}
            </p>

            <p className="md:text-[56px] text-[35px] font-normal  text-center break-all">
              {t("experience.forBetter")}
              <span className="inline-block ms-5 font-bold text-teal-700">
                {t("experience.experience")}
              </span>
            </p>
          </div>
          <div>
            <p className=" text-lg font-light  text-center break-all">
              {t("experience.paragraph1")}
            </p>
          </div>
        </section>
        <section className="w-full pt-4 flex flex-col items-center  relative ">
          <div className="w-fit">
            <Image unoptimized {...BigPhone} alt="big-phone" />
          </div>

          <div
            style={{ backgroundImage: `url(${container_1.src})` }}
            className={`absolute right-[17%] w-[265px] h-[57px] flex items-center justify-center   bg-no-repeat bg-cover drop-shadow-xl text-sm`}
          >
            <AnimatedText text={t("text1")} delay={100} />
            {/* {t("text1")} */}
          </div>
          <div
            style={{ backgroundImage: `url(${container_2.src})` }}
            className={`absolute right-[11%] top-[20%] w-[236px]  h-[55px] flex items-center justify-center   bg-no-repeat bg-cover drop-shadow-xl text-sm text-white`}
          >
            <AnimatedText text={t("text2")} delay={1500} />
          </div>
        </section>
      </div>
    </Container1>
  );
};

export default Experience;
