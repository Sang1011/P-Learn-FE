"use client"

import LanguageSwitcher from "@/components/LanguageSwitcher";
import withLoading from "@/hoc/withLoading";

function AboutPage() {
    return (
      <div>
        <h1>About Page</h1>
        <p>Đây là trang giới thiệu!</p>
        <LanguageSwitcher/>
      </div>
    );
  }

export default withLoading(AboutPage);
  