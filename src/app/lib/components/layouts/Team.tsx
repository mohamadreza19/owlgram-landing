import { FunctionComponent, useEffect } from "react";

import person1 from "/public/asset/banner/person1.png";
import person2 from "/public/asset/banner/person2.png";
import person3 from "/public/asset/banner/person3.png";
import person4 from "/public/asset/banner/person4.png";
import Image from "next/image";
import { Container1 } from "../containers";
import { SegmentComponentProps, Team } from "../../shared";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { useQuery } from "@tanstack/react-query";
import { ApiCallService, useDirection, useLocale } from "../../services";

interface TeamProps extends SegmentComponentProps {}

const TeamCom: FunctionComponent<TeamProps> = ({ ...rest }) => {
  const locale = useLocale();
  const { data } = useQuery({
    queryKey: ["getTeamByLanguageId", locale.id],
    queryFn: () => ApiCallService.getTeamByLanguageId(locale.id),
  });
  const t = useTranslations("index");

  return (
    <Container1
      bg="bg-gray-100"
      {...rest}
      childrenCallback={({ inView }) => (
        <>
          <div className="w-full pt-52 pb-14">
            <section className="flex flex-col items-center justify-center">
              <p className="font-extrabold text-[50px] text-center">
                {t("team.OWLEGRAMTeam")}
              </p>
              <p className="md:w-[1024px] w-full text-lg font-light text-center leading-10">
                {t("team.paragraph1")}
              </p>
            </section>
            <section className="flex  flex-wrap gap-4  justify-center items-center pt-16 relative">
              {data &&
                data.map((team, index) => {
                  return (
                    <ImageContainer
                      key={index}
                      isRootContainerViewed={inView}
                      team={team}
                    />
                  );
                })}
            </section>
          </div>
        </>
      )}
    ></Container1>
  );
};

interface ImageContainerProps {
  key: any;
  team: Team;
  isRootContainerViewed: boolean;
}

const ImageContainer: FunctionComponent<ImageContainerProps> = ({
  key,
  team,
  isRootContainerViewed,
}) => {
  return (
    <div
      key={key}
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

export default TeamCom;
