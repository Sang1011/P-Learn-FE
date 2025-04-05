"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation"; // 🆕 Dùng để refresh page

export function useLanguage() {
  const [language, setLanguage] = useState<string>(Cookies.get("language") || "vi");
  const router = useRouter(); // 🆕 Dùng để force reload component

  function changeLanguage(lang: string) {
    if (language !== lang) {
      Cookies.set("language", lang, { expires: 30 });
      setLanguage(lang);
      router.refresh(); // 🆕 Cập nhật lại UI khi đổi ngôn ngữ
      console.log("Language changed to:", lang);
    }
  }

  useEffect(() => {
    const lang = Cookies.get("language");
    if (lang && lang !== language) {
      setLanguage(lang);
    }
    console.log("Language changed to:", lang);
  }, [language]);

  return { language, changeLanguage };
}
