"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import MySider from "@/components/common/Sider";
import { Layout } from "antd";
import "./style.scss";
import LoadingWrapper from "@/components/common/LoadingWrapper";
import { useMediaQuery } from "react-responsive";

interface LayoutProps {
  children: React.ReactNode;
  role?: string;
}

export default function RenderLayout({ children, role = "USER" }: LayoutProps) {
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingWrapper />;

  return (
    <Layout className={`layout mainlayout ${loading ? "" : "loaded"}`}>
      <Header />
      <section className="layout mainlayout__body">
        {isMobile ? <></> :<MySider />}
        <main className="content">{children}</main>
      </section>
      <Footer />
    </Layout>
  );
}