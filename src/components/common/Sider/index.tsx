"use client"
import React, { useState, memo, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation"; 
import { Menu } from "antd";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { HiNewspaper } from "react-icons/hi2";
import { MdChromeReaderMode } from "react-icons/md";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./style.scss";

const Sider = () => {
  const pathname = usePathname(); 
  const [collapsed, setCollapsed] = useState(true);
  const [currentPage, setCurrentPage] = useState("");
  const router = useRouter();

  useEffect(() => {
    setCurrentPage(pathname);
  }, [pathname])

  const handleToggleMenu = () => setCollapsed((prev) => !prev);

  

  const activeKey = pathname;

  const items = [
    {
      key: "/",
      icon: <FaHome />,
      label: <Link href="/">Home</Link>,
      disabled: currentPage === "/" 
    },
    {
      key: "/about",
      icon: <MdChromeReaderMode />,
      label: <Link href="/about">About</Link>,
      disabled: currentPage === "/about"
    },
    {
      key: "/blog",
      icon: <HiNewspaper />,
      label: <Link href="/blog">Blogs</Link>,
      disabled: currentPage === "/blog"
    },
    {
      key: "toggle",
      label: collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />,
      title: "Toggle menu",
      onClick: handleToggleMenu,
    },
  ];

  return (
    <div className={`sider ${collapsed ? "collapsed" : ""}`}>
      <Menu
        className="menu"
        selectedKeys={[activeKey]} 
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default memo(Sider);
