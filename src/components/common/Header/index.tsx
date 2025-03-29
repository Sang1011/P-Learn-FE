"use client"

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { useMediaQuery } from "react-responsive";


function Header() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return isMobile ? <HeaderMobile/> : <HeaderDesktop/>
}

export default Header;
