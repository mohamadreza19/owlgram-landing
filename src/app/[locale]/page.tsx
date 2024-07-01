"use client";
import { useTranslations } from "next-intl";
import {
  FunctionComponent,
  ReactElement,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  AppHeader,
  Container1,
  DownloadApp,
  Experience,
  Faq,
  Footer,
  Services,
  Team,
  WhyChose,
} from "../lib/components";
import { Language, SegmentComponentProps } from "../lib/shared";
import { getLocale } from "next-intl/server";
import { defaultLocale, locales, useRouter } from "@/navigation";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { setLocale } from "../lib/features/locale";
import { useQuery } from "@tanstack/react-query";
import { ApiCallService } from "../lib/services";

interface IComponent {
  component: FunctionComponent<SegmentComponentProps>;
}

const components: IComponent[] = [
  {
    component: Experience,
  },
  {
    component: WhyChose,
  },
  {
    component: Services,
  },
  {
    component: DownloadApp,
  },
  {
    component: Team,
  },
  {
    component: Faq,
  },
  {
    component: Footer,
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const appHeaderRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("index");
  const dispatch = useDispatch();
  const pathName = usePathname();

  const languages = useQuery({
    queryKey: ["AllLanguages"],
    queryFn: ApiCallService.getAllLanguages,
  });

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    const html = document.querySelector("html") as HTMLElement;
    if (languages.data && languages.data.length) {
      locales.forEach((locale) => {
        if (pathName.includes(locale)) {
          languages.data.forEach((item) => {
            if (item.title.toLowerCase() === locale) dispatch(setLocale(item));
          });

          if (locale === "ar") {
            body.classList.remove("font-poppins");
            body.classList.add("font-rubik_ar");
            body.dir = "rtl";
          } else {
            body.dir = "ltr";
            body.classList.remove("font-rubik_ar");
            body.classList.add("font-poppins");
          }
          html.lang = locale;
        }
      });
    }
  }, [pathName, languages.data]);

  const menu = [
    {
      id: "experience",
      text: t("app-header.HomePage"),
    },
    {
      id: "whyChose",
      text: t("app-header.AboutOwlegram"),
    },
    {
      id: "services",
      text: t("app-header.Services"),
    },
    {
      id: "download",
      text: t("app-header.Download"),
    },
    {
      id: "team",
      text: t("app-header.Team"),
    },

    {
      id: "FAQ",
      text: t("app-header.FAQ"),
    },
    {
      id: "contact",
      text: t("app-header.Contact"),
    },
  ];

  function handleSetActiveIndex(index: number) {
    setActiveIndex(index);
  }
  return (
    <>
      <AppHeader
        languages={languages.data}
        activeIndex={activeIndex}
        menu={menu}
        onView={() => {}}
        id="app-header"
      />

      {components.map((item, index) => {
        const { component: Component } = item;

        return (
          <Component
            onView={() => handleSetActiveIndex(index)}
            appHeaderRef={appHeaderRef}
            id={menu[index].id}
            key={index}
          />
        );
      })}
    </>
  );
}
