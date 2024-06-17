import { FunctionComponent, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

type Bg = "bg-gray-100" | "bg-gray2-500" | "bg-[#171717]";

interface Container1Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  bg: Bg;
}

const Container1: FunctionComponent<Container1Props> = ({ children, bg }) => {
  return (
    <div className={" w-full " + bg}>
      <div className="max-w-[1440px]  md:px-[127px] px-[18px] overflow-hidden mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Container1;
