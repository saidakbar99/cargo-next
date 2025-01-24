import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['ru', 'uz'],
  defaultLocale: 'ru',
  pathnames: {
    '/': '/',
    '/pathnames': {
      ru: '/pathnames',
      uz: '/pfadnamen'
    }
  }
});
 
export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createNavigation(routing);
