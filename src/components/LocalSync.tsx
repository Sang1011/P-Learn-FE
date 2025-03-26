"use client";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function LocaleSync() {
  const pathname = usePathname();
  const cookieLocale = Cookies.get("PLearn_LOCALE");

  useEffect(() => {
    const urlLocale = pathname.split("/")[1]; 
    if (urlLocale && cookieLocale !== urlLocale) {
      Cookies.set("PLearn_LOCALE", urlLocale, { path: "/", expires: 30 });
    }
  }, [pathname, cookieLocale]);

  return null; 
}
