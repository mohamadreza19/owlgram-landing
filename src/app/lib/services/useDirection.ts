"use client";
import { useEffect, useRef, useState } from "react";

interface useDirection {}
type Dir = "ltr" | "rtl";
const useDirection = () => {
  const [dir, setDir] = useState<Dir>("ltr");
  const body = useRef(document.querySelector("body") as HTMLBodyElement);
  useEffect(() => {
    const direction = body.current.dir;

    if (direction) {
      setDir(direction as Dir);
    }
  }, [body.current.dir]);
  return dir;
};

export default useDirection;
