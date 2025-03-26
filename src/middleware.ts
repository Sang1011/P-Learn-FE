// import createMiddleware from 'next-intl/middleware';
// import {routing} from './i18n/routing';
 
// export default createMiddleware(routing);
 
// export const config = {
//   matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
// };

import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const { locales, defaultLocale } = routing;

// Tạo middleware từ next-intl
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localeDetection: false, // Tắt tự động detect từ trình duyệt
});

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const pathname = url.pathname;
  
  const cookieLocale = req.cookies.get("PLearn_LOCALE")?.value;
  const acceptLangHeader = req.headers.get("accept-language");
  const acceptLang = acceptLangHeader?.split(",")[0].split("-")[0];

  // Kiểm tra locale từ URL
  const localeFromUrl = locales.find((l) => pathname.startsWith(`/${l}`));

  // Chọn locale theo thứ tự ưu tiên: URL > Cookie > Accept-Language > Default
  const finalLocale = localeFromUrl
    ? localeFromUrl
    : cookieLocale && locales.includes(cookieLocale as typeof locales[number])
    ? cookieLocale
    : locales.includes((acceptLang || "") as typeof locales[number])
    ? acceptLang
    : defaultLocale;

  // Nếu URL không có locale nhưng cookie có, redirect để đồng bộ
  if (!localeFromUrl && cookieLocale && cookieLocale !== finalLocale) {
    return NextResponse.redirect(new URL(`/${cookieLocale}${pathname}`, req.url));
  }

  // Nếu URL có locale nhưng cookie khác, cập nhật lại cookie
  const res = intlMiddleware(req);
  if (cookieLocale !== finalLocale) {
    if (finalLocale) {
        res.cookies.set("PLearn_LOCALE", finalLocale, { path: "/" });
    }
  }

  res.headers.set("x-pathname", pathname.replace(/^\/(en|vi)/, ""));
  return res;
}

// Config middleware chỉ áp dụng cho các route cần thiết
export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};

