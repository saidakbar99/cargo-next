import {defineRouting} from "next-intl/routing";
import {createNavigation} from "next-intl/navigation";

export const routing = defineRouting({
	locales: ["ru", "uz", "eng", "tr"],
	defaultLocale: "ru",
});

export const {Link, getPathname, redirect, usePathname, useRouter} =
	createNavigation(routing);
