import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import owlgramLogo from '/public/main-logo.svg';
import {
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Container1 } from '../containers';
import { SegmentComponentProps } from '../../shared';
import { RxHamburgerMenu } from 'react-icons/rx';
import burger from '/public/asset/svg/burger.svg';

interface AppHeaderProps extends SegmentComponentProps {
  menu: {
    id: string;
    text: string;
  }[];
  activeIndex: number;
}
type Flag = { src: string; text: string };

const flag: Flag[] = [
  {
    src: '/asset/flag/usa.svg',
    text: 'En',
  },
  {
    src: '/asset/flag/france.svg',
    text: 'Fr',
  },
];

// font-poppins
const AppHeader: FunctionComponent<AppHeaderProps> = ({
  id,
  menu,
  activeIndex,
}) => {
  const [isBurgerClick, setIsBurgerClick] = useState(false);
  function handleClick(href: string) {
    // setCurrentHref(href);
  }
  function handleSetIsBurgerClick() {
    setIsBurgerClick(!isBurgerClick);
  }
  return (
    <>
      <header className=" md:top-8 top-[18px] left-1/2 transform -translate-x-1/2  fixed   flex items-center justify-between gap-x-[55px] md:max-w-[1024px] sm:max-w-[90%]  max-w-[359px]  w-full h-[72px]  mx-auto  py-[10px] md:px-[16px] px-4 bg-white rounded-2xl drop-shadow-md z-10">
        <Image
          unoptimized
          width={68}
          height={43}
          src={owlgramLogo.src}
          alt="logo"
        />
        <ul
          className={` md:flex hidden ${
            isBurgerClick && '!flex'
          }  md:flex-row flex-col md:static absolute w-full left-1/2 md:transform-none transform -translate-x-1/2 md:p-0 py-3 px-2 top-[5rem] md:rounded-none rounded-[10px] mx-auto md:bg-none bg-white`}
        >
          {menu.map((item, i) => (
            <LinkPagination
              onClick={() => handleClick(item.id)}
              isActive={activeIndex === i}
              key={i}
              href={'/#' + item.id}
            >
              {item.text}
            </LinkPagination>
          ))}
        </ul>
        <div className="md:hidden block cursor-pointer">
          <Image onClick={handleSetIsBurgerClick} alt="burger" {...burger} />
        </div>
        <div className="md:block hidden">
          <LanguageSelectBox options={flag} />
        </div>
      </header>
      <Container1 bg="bg-gray-100">
        <div id={id} className="w-full h-24 pt-8"></div>
      </Container1>
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
        isActive ? 'font-semibold' : 'font-normal'
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
        isActive && 'opacity-100'
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
          openBox && 'opacity-100 !block'
        } absolute min-w-full backdrop-blur-xl bg-white/30  top-full ps-4 pe-5 py-3 rounded-lg border border-solid border-gray-300`}
      >
        {options.map((flag, i2) => (
          <section key={i2 + 1} className="ps-2 pe-8 py-2">
            <Selecteditem onClick={() => handleSelectItem(flag)} {...flag} />
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
