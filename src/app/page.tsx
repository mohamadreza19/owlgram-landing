"use client";

import {
  FunctionComponent,
  ReactElement,
  RefObject,
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
} from "./lib/components";
import { SegmentComponentProps } from "./lib/shared";

interface IComponent {
  component: FunctionComponent<SegmentComponentProps>;
}

const menu = [
  {
    id: "experience",
    text: "Home Page",
  },
  {
    id: "whyChose",
    text: "About Owlegram",
  },
  {
    id: "services",
    text: "Services",
  },
  {
    id: "download",
    text: "Download",
  },
  {
    id: "team",
    text: "Team",
  },

  {
    id: "FAQ",
    text: "FAQ",
  },
  {
    id: "contact",
    text: "Contact",
  },
];
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
  function handleSetActiveIndex(index: number) {
    setActiveIndex(index);
  }
  return (
    <>
      <AppHeader
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
