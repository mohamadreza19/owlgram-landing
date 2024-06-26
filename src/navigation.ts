import { createSharedPathnamesNavigation } from 'next-intl/navigation';
export type Locales = 'en' | 'ar';
export const locales = ['en', 'ar'] as const;
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
