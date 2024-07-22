"use client";
import { usePathname } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import { Locales, locales } from "@/navigation";
interface useGetCurrentLanguageBasedUrlProps {}

const useGetCurrentLanguageBasedUrl =
  ({}: useGetCurrentLanguageBasedUrlProps) => {
    const pathname = usePathname();
    const [currentLang, setCurrentLang] = useState<string | undefined>();

    useEffect(() => {
      if (pathname) {
        locales.forEach((locale) => {
          if (pathname.includes(locale)) {
            setCurrentLang(locale);
          }
        });
      }
    }, [pathname]);

    return currentLang as Locales;
  };

export default useGetCurrentLanguageBasedUrl;
