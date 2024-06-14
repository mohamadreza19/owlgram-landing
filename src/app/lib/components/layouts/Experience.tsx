import Image from "next/image";
import { FunctionComponent, useEffect } from "react";
import { Container1 } from "../containers";
import { SegmentComponentProps } from "../../shared";
import { useInView } from "react-intersection-observer";

interface ExperienceProps extends SegmentComponentProps {}

const Experience: FunctionComponent<ExperienceProps> = ({
  id,
  appHeaderRef,
  onView,
}) => {
  const { ref: ref, inView: inView1 } = useInView({ threshold: 0 });
  useEffect(() => {
    if (inView1) {
      onView();
      window.scrollTo(0, 0);
    }
  }, [inView1]);

  return (
    <Container1 bg="bg-gray-100">
      <div
        id={id}
        ref={ref}
        className=" w-full flex flex-col justify-center items-center pt-8"
      >
        <section
          className={`w-[563px] flex flex-col items-center animate__animated animation-delay-1000 ${
            inView1 && "animate__fadeIn"
          }`}
        >
          <div className="w-fit flex gap-x-2 py-1 px-2 bg-white rounded-3xl">
            <Image
              className="rounded-full min-w-6 min-h-6 max-w-6 max-h-6 object-cover"
              src={"/asset/flag/uae.svg"}
              width={24}
              height={24}
              alt="flag"
              unoptimized
            />
            <p className="text-lg">United Arab Emirates</p>
          </div>
          <div>
            <p className="text-[56px] font-normal text-nowrap">
              Use Our New Platform
            </p>

            <p className="text-[56px] font-normal text-nowrap">
              for better
              <span className="inline-block ms-5 font-bold text-teal-700">
                experience
              </span>
            </p>
          </div>
          <div>
            <p className="text-center text-lg font-light">
              To the home cook, having the right pots and pans is essential for
              a properly functioning kitchen
            </p>
          </div>
        </section>
        <section className="w-full pt-4 flex flex-col items-center  relative ">
          <div className="w-fit">
            <Image
              className="w-[465px] min-w-[465px] max-w-[465px] h-[733px] !static"
              fill
              src={"/asset/banner/big-phone.png"}
              alt="big-phone"
            />
          </div>

          <div className="absolute right-[17%] w-[265px] h-[57px] flex items-center justify-center  bg-container-1 bg-no-repeat bg-cover drop-shadow-xl text-sm ">
            Hi, Mostafa! How your day going?
          </div>
          <div className="absolute right-[11%] top-[20%] w-[236px]  h-[55px] flex items-center justify-center  bg-container-2 bg-no-repeat bg-cover drop-shadow-xl text-sm text-white ">
            You know how it goes ....
          </div>
        </section>
      </div>
    </Container1>
  );
};

export default Experience;
