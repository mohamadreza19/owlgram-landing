"use clinet";
import { FunctionComponent } from "react";
import { Team, TeamsResponse } from "../shared";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { useGetCurrentLanguageBasedUrl, useLocale } from "../services";
interface TeamSliderProps {
  data: TeamsResponse | undefined;
  inView: boolean;
}

const TeamSlider: FunctionComponent<TeamSliderProps> = ({ data, inView }) => {
  const locale = useGetCurrentLanguageBasedUrl({});

  return (
    <Swiper
      direction="horizontal"
      dir="ltr"
      className="w-full"
      spaceBetween={16}
      slidesPerView={"auto"}
      modules={[Autoplay]}
      freeMode
      touchReleaseOnEdges
      autoplay={{
        delay: 3000,
        reverseDirection: locale == "ar" || locale == "fa" ? true : false,
      }}
    >
      {data &&
        data.map((team, index) => {
          return (
            <SwiperSlide key={index} className="!w-fit">
              <ImageContainer isRootContainerViewed={inView} team={team} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default TeamSlider;
interface ImageContainerProps {
  team: Team;
  isRootContainerViewed: boolean;
}
const ImageContainer: FunctionComponent<ImageContainerProps> = ({
  team,
  isRootContainerViewed,
}) => {
  return (
    <div
      className={`w-[260px] min-w-[260px] max-w-[260px] h-[422px] relative rounded-[15px] team-c !overflow-hidden ${
        Number(Math.random() * 10) < 5 ? "md:mt-16" : ""
      } `}
    >
      <Image
        fill
        className={`w-full h-full object-cover  animate__animated animation-delay-900 cursor-pointer ${
          isRootContainerViewed && "animate__fadeInUp"
        }`}
        alt={team.name}
        src={team.image}
      />
      <div
        className={`top-[347px] absolute team-tooltip text-white w-full ps-3`}
      >
        <p className="text-[21px] font-extrabold">{team.name}</p>
        <p className="text-[13px] font-semibold">{team.side}</p>
      </div>
    </div>
  );
};
