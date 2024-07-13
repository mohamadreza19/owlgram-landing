import { createSharedPathnamesNavigation } from "next-intl/navigation";
export type Locales = "en" | "ar" | "kr" | "fr";
export const locales = ["en", "ar", "kr", "fr"] as const;
export const defaultLocale = locales[0];
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation();
// export const { Link, redirect, usePathname, useRouter } =
//   createSharedPathnamesNavigation({ locales });
