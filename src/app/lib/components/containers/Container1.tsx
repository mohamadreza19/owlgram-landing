import { FunctionComponent, HTMLAttributes, ReactNode, useEffect } from "react";
import classNames from "classnames";
import { SegmentComponentProps } from "../../shared";

import { useInView } from "react-cool-inview";

type Bg = "bg-gray-100" | "bg-gray2-500" | "bg-[#171717]";

interface Container1Props
  extends HTMLAttributes<HTMLDivElement>,
    SegmentComponentProps {
  // children: ReactNode;
  bg: Bg;
  childrenCallback: ({ inView }: { inView: boolean }) => ReactNode;
}

const Container1: FunctionComponent<Container1Props> = ({
  childrenCallback,
  bg,
  idString,
  onView,
  unView,
}) => {
  const { observe, unobserve, inView, scrollDirection, entry } = useInView({
    threshold: 0, // Default is 0

    onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
      onView();
      // observe();
      // Triggered when the target enters the viewport
    },
    onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
      if (scrollDirection.vertical === "down") {
        unView();
      }

      // unobserve();
      // Triggered when the target leaves the viewport
    },
    // More useful options...
  });

  return (
    <div className={" w-full " + bg}>
      <div
        ref={observe}
        id={idString}
        className="max-w-[1440px] lg:min-w-[1000px]  md:px-[127px] px-[18px]  overflow-hidden mx-auto"
      >
        {childrenCallback({ inView })}
        {/* {children} */}
      </div>
    </div>
  );
};

export default Container1;
