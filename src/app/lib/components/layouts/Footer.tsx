import { FunctionComponent, useEffect } from "react";
import owlgramLogo from "/public/main-logo.svg";
import qrCode from "/public/asset/qr-code.svg";
import content from "/public/asset/content.png";
import Image from "next/image";
import { Container1 } from "../containers";
import { SegmentComponentProps } from "../../shared";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { ApiCallService, Email, useLocale } from "../../services";
import { useQuery } from "@tanstack/react-query";
interface FooterProps extends SegmentComponentProps {}

const Footer: FunctionComponent<FooterProps> = ({ ...rest }) => {
  const t = useTranslations("index");
  const locale = useLocale();

  const { data } = useQuery({
    queryKey: ["getContactUs", locale.id],
    queryFn: () => ApiCallService.getContactUsByLanguageId(locale.id),
  });

  const email = new Email({
    body: "",
    recipientType: "manager",
    subject: "",
  });

  return (
    <Container1
      bg="bg-[#171717]"
      {...rest}
      childrenCallback={() => (
        <>
          <footer className="pb-9 ">
            <div className="w-full pt-72 flex cs-1:flex-row flex-col items-center gap-y-4 justify-between md:text-center text-left">
              <div>
                <section className="text-white">
                  <p className="text-[43px] font-bold break-all ">
                    {t("footer.1")}
                  </p>
                </section>
                {data &&
                  data.map((address, index) => {
                    return (
                      <section
                        key={index}
                        className="text-lg font-medium text-white flex flex-col pt-4 gap-y-4"
                      >
                        <p>
                          {" "}
                          {t("footer.2")} {address.tel}
                        </p>
                        <p>
                          {t("footer.3")} {address.address}
                        </p>
                      </section>
                    );
                  })}

                <section className="pt-[97px]">
                  <Image
                    className="min-w-[113px] min-h-[71px] md:mx-auto me-auto"
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
                    <Image
                      className="!w-[128px] !h-[128px] rounded-[10px]"
                      alt="qrCode"
                      {...qrCode}
                    />
                  </div>
                  <div className="">
                    <p className="text-base font-semibold text-white text-center">
                      {t("footer.5")}
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={email.emailPopUpCaller}
                      className="bg-teal2-400 w-[156px] h-[59px] text-[17px] font-semibold text-white rounded-2xl"
                    >
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
        </>
      )}
    />
  );
};

export default Footer;
