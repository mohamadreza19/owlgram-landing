import Image from "next/image";

import { useParams, usePathname, useSearchParams } from "next/navigation";
import AwayListener from "react-click-away-listener";
import owlgramLogo from "/public/main-logo.svg";
import {
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Container1 } from "../containers";
import {
  AllLanguagesResponse,
  Language,
  SegmentComponentProps,
} from "../../shared";
import { RxHamburgerMenu } from "react-icons/rx";
import burger from "/public/asset/svg/burger.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";
import { ApiCallService } from "../../services";
import { useQuery } from "@tanstack/react-query";
import { useRouter, Link, locales } from "@/navigation";
import { useDispatch } from "react-redux";
import { setLocale } from "../../features/locale";
import type { Locales } from "@/navigation";
interface AppHeaderProps extends SegmentComponentProps {
  menu: {
    id: string;
    text: string;
  }[];
  activeIndex: number;
  languages: AllLanguagesResponse | undefined;
  handleSetActiveIndexWhenClickMenuItem: (index: number) => void;
}

// font-poppins
const AppHeader: FunctionComponent<AppHeaderProps> = ({
  idString,
  menu,
  activeIndex,
  languages,
  handleSetActiveIndexWhenClickMenuItem,
}) => {
  const [isBurgerClick, setIsBurgerClick] = useState(false);
  const selectedLocale = useSelector((state: RootState) => state.locale);

  const dispatch = useDispatch();
  const pathName = usePathname();

  // const locale = useSelector((state: RootState) => state.locale);

  function handleClick(href: string) {
    // setCurrentHref(href);
  }
  function handleSetIsBurgerClick() {
    setIsBurgerClick(!isBurgerClick);
  }
  function handleSelectLocale(language: Language) {
    locales.forEach((locale) => {
      const lowerCase = language.title.toLowerCase();
      if (locale.includes(lowerCase)) {
        dispatch(setLocale(language));
      }
    });
  }

  return (
    <>
      <header className=" md:top-8 top-[18px] left-1/2 transform -translate-x-1/2  fixed   flex items-center justify-between gap-x-[55px] md:max-w-[1024px] sm:max-w-[90%]  max-w-[359px]  w-full h-[72px]  mx-auto  pt-[10px]  md:px-[16px] px-4 bg-white rounded-2xl drop-shadow-md z-10">
        <Image
          unoptimized
          width={68}
          height={43}
          src={owlgramLogo.src}
          alt="logo"
        />
        <ul
          className={` md:flex hidden ${
            isBurgerClick && "!flex"
          }  md:flex-row flex-col md:static absolute w-full left-1/2 md:transform-none transform -translate-x-1/2 md:p-0 py-3 px-2 top-[5rem] md:rounded-none rounded-[10px] mx-auto md:bg-none bg-white`}
        >
          <section>
            <div
              className="md:hidden block"
              // className="bg-gray2-300 w-full h-[51px] rounded-lg"
            >
              {languages && (
                <LanguageSelectBox
                  selectedLocale={selectedLocale}
                  options={languages}
                  handleSelectLocale={handleSelectLocale}
                />
              )}
            </div>
          </section>
          {menu.map((item, i) => (
            <>
              <LinkPagination
                onClick={() => handleSetActiveIndexWhenClickMenuItem(i)}
                isActive={activeIndex === i}
                key={i}
                href={"/#" + item.id}
              >
                {item.text}
              </LinkPagination>
            </>
          ))}
        </ul>

        <div className="md:hidden block cursor-pointer">
          <Image onClick={handleSetIsBurgerClick} alt="burger" {...burger} />
        </div>
        <div className="md:block hidden">
          {languages && (
            <LanguageSelectBox
              selectedLocale={selectedLocale}
              options={languages}
              handleSelectLocale={handleSelectLocale}
            />
          )}
        </div>
      </header>

      {/* <Container1
        childrenCallback={() => <></>}
        idString={idString}
        onView={() => {}}
        unView={() => {}}
        bg="bg-gray-100"
      >
        <div id={idString} className="w-full h-24 pt-8"></div>
      </Container1> */}
    </>
  );
};

interface LinkPaginationProps {
  href: string;
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const LinkPagination: FunctionComponent<LinkPaginationProps> = ({
  href,
  children,
  isActive,
  onClick,
}) => {
  // console.log(currentHref);

  return (
    <li
      className={` py-2 lg:px-2 px-1 flex items-center lg:gap-x-2 gap-x-1 transition-all lg:text-base text-sm  ${
        isActive ? "font-semibold" : "font-normal"
      }`}
    >
      <Point isActive={isActive} />

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
  options: AllLanguagesResponse;
  selectedLocale: Language;
  handleSelectLocale: (language: Language) => void;
}

const LanguageSelectBox: FunctionComponent<LanguageSelectBoxProps> = ({
  options,
  selectedLocale,
  handleSelectLocale,
}) => {
  const [openBox, setOpenBox] = useState(false);
  const pathname = usePathname();

  function handleToggleOpenBox() {
    setOpenBox(!openBox);
  }
  function closeBox() {
    setOpenBox(false);
  }
  function handleActiveLanguage(title: string) {
    const lowerCaseLanguage = title.toLowerCase();

    if (pathname.includes(lowerCaseLanguage)) return true;
    else return false;
  }

  return (
    <AwayListener onClickAway={closeBox}>
      <div className="flex items-center gap-x-2 relative hover:bg-white">
        {/* <selectBox> */}
        <div
          className={`transition-opacity delay-300 md:opacity-0  md:hidden grid grid-cols-3 ${
            openBox && "!opacity-100 !flex"
          } md:absolute relative min-w-full md:flex-col flex-wrap backdrop-blur-xl md:bg-white/30  bg-gray2-300 top-full md:ps-4 md:pe-5 py-3 rounded-lg border border-solid md:border-gray-300`}
        >
          {options.map((flag, i2) => (
            <Selecteditem
              key={i2}
              isActive={handleActiveLanguage(flag.title)}
              onClick={() => {}}
              {...flag}
            />
          ))}
        </div>

        {selectedLocale.id && (
          <Selecteditem
            sectionClassName="!w-fit !h-fit"
            isActive={false}
            className="md:inline hidden !w-fit !h-fit"
            onClick={handleToggleOpenBox}
            {...selectedLocale}
          />
        )}
        <IoIosArrowDown
          className="cursor-pointer md:block hidden"
          onClick={handleToggleOpenBox}
        />
      </div>
    </AwayListener>
  );
};
interface Selecteditem extends Language {
  onClick?: () => void;
  className?: string;
  isActive: boolean;
  sectionClassName?: string;
}

const Selecteditem: FunctionComponent<Selecteditem> = ({
  flag,
  id,
  title,
  onClick,
  className,
  sectionClassName,
  isActive,
}) => {
  return (
    <Link href="/" locale={String(title).toLowerCase()} className={className}>
      <section
        onClick={onClick}
        className={` ${sectionClassName}
          ${
            isActive &&
            "md:!bg-transparent bg-white rounded-[7px] md:shadow-none shadow"
          }
        md:w-fit  w-[104px] md:h-fit h-[43px] flex items-center justify-center gap-x-1 cursor-pointer md:hover:scale-110 transition-all`}
      >
        <Image
          className="rounded-full min-w-4 min-h-4 max-w-4 max-h-4 object-fill"
          src={flag}
          width={16}
          height={16}
          alt="flag"
          unoptimized
        />
        <p className="text-lg font-semibold">{title}</p>
      </section>
    </Link>
  );
};
export default AppHeader;
