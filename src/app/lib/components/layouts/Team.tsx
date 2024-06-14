import { FunctionComponent, useEffect } from "react";
import person1 from "/public/asset/banner/person1.png";
import person2 from "/public/asset/banner/person2.png";
import person3 from "/public/asset/banner/person3.png";
import person4 from "/public/asset/banner/person4.png";
import Image from "next/image";
import { Container1 } from "../containers";
import { SegmentComponentProps } from "../../shared";
import { useInView } from "react-intersection-observer";

interface TeamProps extends SegmentComponentProps {}

const Team: FunctionComponent<TeamProps> = ({ id, onView }) => {
  const { ref: ref, inView: inView1 } = useInView({ threshold: 0 });
  useEffect(() => {
    if (inView1) {
      onView();
    }
  }, [inView1]);

  return (
    <Container1 bg="bg-gray-100">
      <div ref={ref} id={id} className="w-full pt-52 pb-14">
        <section className="flex flex-col items-center justify-center">
          <p className="font-extrabold text-[50px]">OWLEGRAM Team</p>
          <p className="w-[723px] text-lg font-light text-center leading-10">
            To the home cook, having the right pots and pans is essential for a
            properly functioning kitchen. You may be wondering what the best pot
            for vegetables is
          </p>
        </section>
        <section className="flex gap-x-3 justify-center pt-16">
          <Image
            className={`rounded-[15px] mt-16 animate__animated animation-delay-900 ${
              inView1 && "animate__fadeInUp"
            }`}
            alt="person4"
            {...person4}
          />
          <Image
            className={`rounded-[15px] animate__animated animation-delay-1000 ${
              inView1 && "animate__fadeInUp"
            }`}
            alt="person3"
            {...person3}
          />
          <Image
            className={`rounded-[15px] mt-16 animate__animated animation-delay-1000 ${
              inView1 && "animate__fadeInUp"
            }`}
            alt="person2"
            {...person2}
          />
          <Image
            className={`rounded-[15px] animate__animated animation-delay-900 ${
              inView1 && "animate__fadeInUp"
            }`}
            alt="person1"
            {...person1}
          />
        </section>
      </div>
    </Container1>
  );
};

export default Team;
