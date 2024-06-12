import { FunctionComponent, useEffect, useState } from "react";

interface FaqProps {}

import openModalIcon from "/public/asset/svg/open-modal.svg";
import closeModalIcon from "/public/asset/svg/close-modal.svg";
import Image from "next/image";

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
const Faq: FunctionComponent<FaqProps> = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  function handleChoseActiveIndex(index: number) {
    setActiveIndex(index);
  }
  function handleClearActiveIndex() {
    setActiveIndex(null);
  }
  return (
    <div className="w-full pt-52 pb-10 ">
      <section>
        <p className="font-bold text-[48px] text-white">
          Frequently asked Question
        </p>
        <p className="max-w-[560px] text-white text-lg font-light">
          To the home cook, having the right pots and pans is essential for a
          properly functioning kitchen
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
      className="modal w-[837px] bg-white rounded-[10px] min-h-[57px] px-3 py-4 flex flex-col justify-center cursor-pointer"
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
