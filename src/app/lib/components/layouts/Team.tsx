import { FunctionComponent } from "react";
import person1 from "/public/asset/banner/person1.png";
import person2 from "/public/asset/banner/person2.png";
import person3 from "/public/asset/banner/person3.png";
import person4 from "/public/asset/banner/person4.png";
import Image from "next/image";

interface TeamProps {}

const Team: FunctionComponent<TeamProps> = () => {
  return (
    <div className="w-full pt-52 pb-14">
      <section className="flex flex-col items-center justify-center">
        <p className="font-extrabold text-[50px]">OWLEGRAM Team</p>
        <p className="w-[723px] text-lg font-light text-center leading-10">
          To the home cook, having the right pots and pans is essential for a
          properly functioning kitchen. You may be wondering what the best pot
          for vegetables is
        </p>
      </section>
      <section className="flex gap-x-3 justify-center pt-16">
        <Image className="rounded-[15px] mt-16 " alt="person4" {...person4} />
        <Image className="rounded-[15px]" alt="person3" {...person3} />
        <Image className="rounded-[15px] mt-16" alt="person2" {...person2} />
        <Image className="rounded-[15px]" alt="person1" {...person1} />
      </section>
    </div>
  );
};

export default Team;
