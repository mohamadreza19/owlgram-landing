import { createSharedPathnamesNavigation } from "next-intl/navigation";
export type Locales = "en" | "ar" | "kr" | "fr" | "fa" | "jp" | "ru" | "ch";
export const locales = [
  "en",
  "ar",
  "kr",
  "fr",
  "ch",
  "fa",
  "jp",
  "ru",
] as const;
export const defaultLocale = locales[0];
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation();
// export const { Link, redirect, usePathname, useRouter } =
//   createSharedPathnamesNavigation({ locales });
