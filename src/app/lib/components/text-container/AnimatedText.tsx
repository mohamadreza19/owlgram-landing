"use client";
import { FunctionComponent, useState } from "react";
import { TypeAnimation } from "react-type-animation";
interface AnimatedTextProps {
  text: string;
  delay: number;
}

const AnimatedText: FunctionComponent<AnimatedTextProps> = ({
  text,
  delay,
}) => {
  const [typingStatus, setTypingStatus] = useState<"initializing" | "done">(
    "initializing"
  );
  return (
    <TypeAnimation
      cursor={false}
      className=""
      sequence={[
        // Same substring at the start will only be typed out once, initially
        delay,
        text,
        () => {
          setTypingStatus("done");
        },
      ]}
      wrapper="span"
      speed={50}
      repeat={1}
    />
  );
};

export default AnimatedText;
