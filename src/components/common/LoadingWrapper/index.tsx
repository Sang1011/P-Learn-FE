"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./style.scss";

const LoadingWrapper = () => {
  const pathname = usePathname(); 

  useEffect(() => {
    const timer = setTimeout(() => {}, 2000);;
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="loadingWrapper">
      <div className="loader"></div>
    </div>
  ) 
};

export default LoadingWrapper;
