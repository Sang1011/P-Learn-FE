"use client"
import React, { useState, memo } from "react";
import { usePathname } from "next/navigation"; // 🚀 Lấy URL hiện tại
import { Menu } from "antd";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { HiNewspaper } from "react-icons/hi2";
import { IoIosSettings } from "react-icons/io";
import { MdChromeReaderMode } from "react-icons/md";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./style.scss";

const Sider = () => {
  const pathname = usePathname(); // 🛑 Lấy URL hiện tại
  const [collapsed, setCollapsed] = useState(true);

  const handleToggleMenu = () => setCollapsed((prev) => !prev);

  // ✅ Tách phần language khỏi pathname
  const getCleanPath = (path: string) => {
    const segments = path.split("/").filter(Boolean); 
    if (["vi", "en"].includes(segments[0])) {
      return `/${segments.slice(1).join("/")}`; 
    }
    return path;
  };

  const activeKey = getCleanPath(pathname);

  const items = [
    {
      key: "/",
      icon: <FaHome />,
      label: <Link href="/">Home</Link>,
    },
    {
      key: "/about",
      icon: <MdChromeReaderMode />,
      label: <Link href="/about">About</Link>,
    },
    {
      key: "/blog",
      icon: <HiNewspaper />,
      label: <Link href="/blog">Blogs</Link>,
    },
    {
      key: "/settings",
      icon: <IoIosSettings />,
      label: <Link href="/settings">Settings</Link>,
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
