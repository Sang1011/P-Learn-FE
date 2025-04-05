"use client"
import HomePage from "@/components/home";
import withLoading from "@/hoc/withLoading";

function Home() {
  return (
    <>
      <HomePage/>
    </>
  );
}

export default withLoading(Home);
