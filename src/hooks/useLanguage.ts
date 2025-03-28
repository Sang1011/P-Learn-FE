"use client"

import { useState } from "react";
import Cookies from "js-cookie";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useLanguage() {
  const [locale, setLocale] = useState<string>(Cookies.get("PLearn_LOCALE") || "vi");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());

  const changeLanguage = (newLocale: string) => {
    Cookies.set("PLearn_LOCALE", newLocale, { path: "/", expires: 30 });

    let newPath = pathname.replace(/^\/(vi|en)/, `/${newLocale}`);
    const search = query ? new URLSearchParams(query).toString() : "";
    const url = search ? `${newPath}?${search}` : newPath;

    router.replace(url);
    setLocale(newLocale); // Cập nhật state để UI cập nhật
  };

  return { locale, changeLanguage };
}
