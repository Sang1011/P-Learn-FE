"use client";

import { useState, useEffect } from "react";

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<null | string>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      if (window.innerWidth < 576) setBreakpoint("xs");
      else if (window.innerWidth < 768) setBreakpoint("sm");
      else if (window.innerWidth < 992) setBreakpoint("md");
      else if (window.innerWidth < 1200) setBreakpoint("lg");
      else setBreakpoint("xl");
    };

    handleResize(); // Chạy ngay lần đầu
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};
