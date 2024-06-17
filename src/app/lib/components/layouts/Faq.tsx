import { FunctionComponent, useEffect, useState } from "react";

interface FaqProps {}

import openModalIcon from "/public/asset/svg/open-modal.svg";
import closeModalIcon from "/public/asset/svg/close-modal.svg";
import messenger from "/public/asset/faq/messenger.svg";
import Image from "next/image";
import { Container1 } from "../containers";
import { SegmentComponentProps } from "../../shared";
import { useInView } from "react-intersection-observer";

interface FaqProps extends SegmentComponentProps {}

type FaqT = {
  title: string;
  body: string;
};
const faqs: FaqT[] = [
  {
    title: "Why is my account associated with a region?",
    body: "We know security and privacy are important to you – and they are important to us, too. We make it a priority to provide strong security and give you confidence that your information is safe and accessible when you need it. We’re constantly working to ensure strong security, protect your privacy,",
  },
  {
    title: "Determining the region associated with your account",
    body: "We know security and privacy are important to you – and they are important to us, too. We make it a priority to provide strong security and give you confidence that your information is safe and accessible when you need it. We’re constantly working to ensure strong security, protect your privacy,",
  },
];
const Faq: FunctionComponent<FaqProps> = ({ id, onView }) => {
  const { ref: ref, inView: inView1 } = useInView({ threshold: 0 });

  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  function handleChoseActiveIndex(index: number) {
    setActiveIndex(index);
  }
  function handleClearActiveIndex() {
    setActiveIndex(null);
  }
  useEffect(() => {
    if (inView1) {
      onView();
    }
  }, [inView1]);
  return (
    <Container1 bg="bg-gray2-500">
      {" "}
      <div
        ref={ref}
        id={id}
        className="w-full pt-52 pb-10 flex cs-1:flex-row  flex-col  justify-between gap-[33px]"
      >
        <div>
          <section>
            <p className="font-bold text-[48px] text-white">
              Frequently asked Question
            </p>
            <p className="max-w-[560px] text-white text-lg font-light">
              To the home cook, having the right pots and pans is essential for
              a properly functioning kitchen
            </p>
          </section>
          <section className="pt-6 grid grid-cols-1 gap-y-4">
            {faqs.map((faq, i) => (
              <Modal
                key={i}
                {...faq}
                isActive={i === activeIndex}
                openFn={() => handleChoseActiveIndex(i)}
                closeFn={() => handleClearActiveIndex()}
              />
            ))}
          </section>
        </div>
        <div className="md:w-[351px] w-full md:h-[408px] h-full bg-white rounded-2xl py-[22px] flex flex-col items-center ">
          <div>
            <Image alt="messenger" {...messenger} />
          </div>
          <div>
            <p className="text-[20px] font-bold pt-5">
              You have different question?
            </p>
          </div>
          <div>
            <p className="text-[20px] font-normal text-center pt-4">
              our team will answer all your question، we ensure a quick response
            </p>
          </div>
          <div>
            <button className="mt-5 bg-teal2-500 w-[235px] h-[54px] rounded-[9px] text-lg font-semibold text-white">
              Contact Support team
            </button>
          </div>
        </div>
      </div>
    </Container1>
  );
};

interface ModalProps extends FaqT {
  key: any;
  isActive: boolean;
  openFn: () => void;
  closeFn: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({
  body,
  title,
  isActive,
  openFn,
  closeFn,
}) => {
  function handleOpen() {
    openFn();
  }
  function handleClose() {
    closeFn();
  }

  return (
    <div
      onClick={!isActive ? handleOpen : handleClose}
      className="modal lg:w-[727px] md:w-[w-full] w-full  bg-white rounded-[10px] min-h-[57px] px-3 py-4 flex flex-col justify-center cursor-pointer"
    >
      <div className="flex justify-between">
        <p className="text-base font-semibold ">{title}</p>
        {!isActive ? (
          <Image
            className="cursor-pointer"
            onClick={handleOpen}
            alt="open"
            {...openModalIcon}
          />
        ) : (
          <Image
            className="cursor-pointer"
            onClick={handleClose}
            alt="close"
            {...closeModalIcon}
          />
        )}
      </div>
      <div
        className={`py-0  transition-all delay-300  max-w-[631px]  max-h-0 overflow-hidden ${
          isActive && "py-[18px] max-h-fit"
        }`}
      >
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Faq;
