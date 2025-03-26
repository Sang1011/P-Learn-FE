"use client"

import { useBreakpoint } from "@/hooks/useBreakpoint";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";


function Header() {
  const screens = useBreakpoint();
  return screens === "lg" || screens === "xl" ? <HeaderDesktop /> : <HeaderMobile />;
}

export default Header;
