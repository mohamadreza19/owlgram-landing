import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";

import {
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { IoIosArrowDown } from "react-icons/io";

interface AppHeaderProps {}
type Flag = { src: string; text: string };

const menu = [
  {
    href: "/",
    text: "Home Page",
  },
  {
    href: "/#about",
    text: "About Owlegram",
  },
  {
    href: "/#services",
    text: "Services",
  },
  {
    href: "/#team",
    text: "Team",
  },
  {
    href: "/#download",
    text: "Download",
  },
  {
    href: "/#FAQ",
    text: "FAQ",
  },
  {
    href: "/#contact",
    text: "Contact",
  },
];
const flag: Flag[] = [
  {
    src: "/asset/flag/usa.svg",
    text: "En",
  },
  {
    src: "/asset/flag/france.svg",
    text: "Fr",
  },
];

const AppHeader: FunctionComponent<AppHeaderProps> = () => {
  const [currentHref, setCurrentHref] = useState("/");

  function handleForceRender(href: string) {
    setCurrentHref(href);
  }

  return (
    <>
      <header className=" top-8 left-1/2 transform -translate-x-1/2  fixed font-poppins flex items-center justify-between gap-x-[55px] max-w-[1024px] md:w-full h-[72px] mx-auto py-[10px] px-[16px] bg-white rounded-2xl drop-shadow-md z-10">
        <Image
          unoptimized
          width={68}
          height={43}
          src={"/main-logo.svg"}
          alt="logo"
        />
        <ul className="flex">
          {menu.map((item, i) => (
            <LinkPagination
              onClick={() => handleForceRender(item.href)}
              currentHref={currentHref}
              key={i}
              href={item.href}
            >
              {item.text}
            </LinkPagination>
          ))}
        </ul>
        <div>
          <LanguageSelectBox options={flag} />
        </div>
      </header>
      <div className="w-full h-24 pt-8"></div>
    </>
  );
};

interface LinkPaginationProps {
  href: string;
  children: ReactNode;
  currentHref: string;
  onClick: () => void;
}

const LinkPagination: FunctionComponent<LinkPaginationProps> = ({
  href,
  children,
  currentHref,
  onClick,
}) => {
  // console.log(currentHref);
  const isActive = currentHref === href;

  return (
    <li
      className={` py-2 px-2 flex items-center gap-x-2 transition-all   ${
        isActive ? "font-semibold" : "font-normal"
      }`}
    >
      <Point isActive={isActive} />{" "}
      <Link onClick={onClick} href={href}>
        {children}
      </Link>
    </li>
  );
};

interface PointProps {
  isActive?: boolean;
}
const Point: FunctionComponent<PointProps> = ({ isActive }) => {
  return (
    <div
      className={`w-2 h-2 rounded-full bg-teal-700 transition-opacity opacity-0 ${
        isActive && "opacity-100"
      }`}
    ></div>
  );
};

interface LanguageSelectBoxProps {
  options: Flag[];
}

const LanguageSelectBox: FunctionComponent<LanguageSelectBoxProps> = ({
  options,
}) => {
  const [selected, setSelected] = useState(options[0]);
  const [openBox, setOpenBox] = useState(false);

  function handleToggleOpenBox() {
    setOpenBox(!openBox);
  }
  function handleSelectItem(item: Flag) {
    setSelected(item);
    setOpenBox(false);
  }
  return (
    <div className="flex items-center gap-x-2 relative">
      {/* <selectBox> */}
      <div
        className={`transition-opacity delay-300 opacity-0 hidden ${
          openBox && "opacity-100 !block"
        } absolute min-w-full backdrop-blur-xl bg-white/30  top-full ps-4 pe-5 py-3 rounded-lg border border-solid border-gray-300`}
      >
        {options.map((flag, i2) => (
          <section className="ps-2 pe-8 py-2">
            <Selecteditem
              onClick={() => handleSelectItem(flag)}
              {...flag}
              key={i2}
            />
          </section>
        ))}
      </div>

      <Selecteditem {...selected} />
      <IoIosArrowDown
        className="cursor-pointer"
        onClick={handleToggleOpenBox}
      />
    </div>
  );
};
interface Selecteditem extends Flag {
  onClick?: () => void;
}

const Selecteditem: FunctionComponent<Selecteditem> = ({
  src,
  text,
  onClick,
}) => {
  return (
    <section
      onClick={onClick}
      className=" flex items-center gap-x-1 cursor-pointer"
    >
      <Image
        className="rounded-full min-w-4 min-h-4 max-w-4 max-h-4 object-cover"
        src={src}
        width={16}
        height={16}
        alt="flag"
        unoptimized
      />
      <p className="text-lg font-semibold">{text}</p>
    </section>
  );
};
export default AppHeader;
