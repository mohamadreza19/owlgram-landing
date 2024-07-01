import { Locales } from "@/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode, useEffect } from "react";

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: Locales };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const messages = await getMessages();

  // useEffect(() => {
  //   const htmlEl = document.querySelector('html') as HTMLElement;
  //   const bodyEl = document.querySelector('body') as HTMLBodyElement;

  //   switch (params.locale) {
  //     case 'en':
  //       bodyEl.classList.add('font-poppins');

  //       break;
  //     case 'ar':
  //       bodyEl.classList.add('font-rubik_ar');
  //       htmlEl.dir = 'rtl';
  //       break;

  //     default:
  //       break;
  //   }

  //   htmlEl.lang = params.locale;
  // }, [params.locale]);

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
