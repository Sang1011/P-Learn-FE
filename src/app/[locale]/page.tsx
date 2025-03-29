"use client"
import HomePage from "@/components/home";
import RenderLayout from "@/components/layout";
import withLayout from "@/hoc/withLayout";
import withLoading from "@/hoc/withLoading";
import { compose } from "@reduxjs/toolkit";

function Home() {
  return (
    <>
      <HomePage/>
    </>
  );
}

export default withLoading(Home);
