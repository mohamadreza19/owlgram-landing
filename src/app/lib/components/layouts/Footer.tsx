import { FunctionComponent, useEffect } from "react";
import owlgramLogo from "/public/main-logo.svg";
import qrCode from "/public/asset/qr-code.png";
import content from "/public/asset/content.png";
import Image from "next/image";
import { Container1 } from "../containers";
import { SegmentComponentProps } from "../../shared";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { ApiCallService, useLocale } from "../../services";
import { useQuery } from "@tanstack/react-query";
interface FooterProps extends SegmentComponentProps {}

const Footer: FunctionComponent<FooterProps> = ({ id, onView }) => {
  const t = useTranslations("index");
  const locale = useLocale();
  const { data: questionAnswerData } = useQuery({
    queryKey: ["getQuestionAnswerByLanguageId", locale.id],
    queryFn: () => ApiCallService.getQuestionAnswerByLanguageId(locale.id),
  });
  const { ref: ref, inView: inView1 } = useInView({ threshold: 0 });
  useEffect(() => {
    if (inView1) {
      onView();
    }
  }, [inView1]);
  return (
    <Container1 bg="bg-[#171717]">
      <footer ref={ref} id={id} className="pb-9 ">
        <div className="w-full pt-72 flex md:flex-row flex-col items-center gap-y-4 justify-between">
          <div>
            <section className="text-white">
              <p className="text-[48px] font-bold max-w-[414px]">
                {t("footer.1")}
              </p>
            </section>
            <section className="text-lg font-medium text-white flex flex-col pt-4 gap-y-4">
              <p> {t("footer.2")}</p>
              <p>{t("footer.3")}</p>
            </section>
            <section className="pt-[97px]">
              <Image
                className="min-w-[113px] min-h-[71px]"
                alt="owlgramLogo"
                {...owlgramLogo}
              />
              <p className="text-lg font-light text-white pt-4 ">
                {t("footer.4")}
              </p>
            </section>
          </div>
          <div>
            <section className=" w-[302px] h-[296px] flex flex-col gap-y-[15px] justify-center items-center rounded-[32px] bg-[#222222] border-[9px] border-[#1C1C1C]">
              <div>
                <Image alt="qrCode" {...qrCode} />
              </div>
              <div>
                <p className="text-base font-semibold text-white">
                  {t("footer.5")}
                </p>
              </div>
              <div>
                <button className="bg-teal2-400 w-[156px] h-[59px] text-[17px] font-semibold text-white rounded-2xl">
                  {t("footer.6")}
                </button>
              </div>
            </section>
            <section>
              <div className="pt-20">
                <Image className="mx-auto" alt="content" {...content} />
              </div>
            </section>
          </div>
        </div>

        <div className="pt-[66px] ">
          <p className="text-lg text-[#5E5E5E] font-light text-center ">
            {t("footer.7")}
          </p>
        </div>
      </footer>
    </Container1>
  );
};

export default Footer;
