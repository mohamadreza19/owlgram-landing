import { FunctionComponent, useEffect, useState } from "react";

interface FaqProps {}

import openModalIcon from "/public/asset/svg/open-modal.svg";
import closeModalIcon from "/public/asset/svg/close-modal.svg";
import messenger from "/public/asset/faq/messenger.svg";
import Image from "next/image";
import { Container1 } from "../containers";
import { QuestionAnswer, SegmentComponentProps } from "../../shared";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { ApiCallService, Email, useLocale } from "../../services";
import { useQuery } from "@tanstack/react-query";

interface FaqProps extends SegmentComponentProps {}

const Faq: FunctionComponent<FaqProps> = ({ id, onView }) => {
  const locale = useLocale();
  const t = useTranslations("index");
  const { ref: ref, inView: inView1 } = useInView({ threshold: 0 });
  const { data: questionAnswerData } = useQuery({
    queryKey: ["getQuestionAnswerByLanguageId", locale.id],
    queryFn: () => ApiCallService.getQuestionAnswerByLanguageId(locale.id),
  });

  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const email = new Email({
    body: "",
    recipientType: "support",
    subject: "",
  });
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
            <p className="font-bold text-[48px] text-white">{t("faq.faq")}</p>
            <p className="max-w-[560px] text-white text-lg font-light">
              {t("faq.paragraph1")}
            </p>
          </section>
          <section className="pt-6 grid grid-cols-1 gap-y-4">
            {questionAnswerData &&
              questionAnswerData.map((faq, i) => (
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
              {t("faq.youHaveDifferentQuestion")}
            </p>
          </div>
          <div>
            <p className="text-[20px] font-normal text-center pt-4">
              {t("faq.text1")}
            </p>
          </div>
          <div>
            <button
              onClick={email.emailPopUpCaller}
              className="mt-5 bg-teal2-500 w-[235px] h-[54px] rounded-[9px] text-lg font-semibold text-white"
            >
              {t("faq.text2")}
            </button>
          </div>
        </div>
      </div>
    </Container1>
  );
};

interface ModalProps extends QuestionAnswer {
  key: any;
  isActive: boolean;
  openFn: () => void;
  closeFn: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({
  question,
  answer,
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
        <p className="text-base font-semibold ">{question}</p>
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
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Faq;
