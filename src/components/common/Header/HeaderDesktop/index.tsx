"use client";

import { Dropdown, Image, MenuProps, Space, Input, Row, Col } from "antd";
import FButton from "@/components/basicUI/FButton";
import "./style.scss";
import CartDropdown from "@/components/CartDropDown";
import WishlistDropDown from "@/components/WishlistDropDown";
import NotifyDropDown from "@/components/NotifyDropDown";
import AccountDropdown from "@/components/AccountDropDown";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";

const { Search } = Input;

function HeaderDesktop() {
  const isLogin = true;
  const t = useTranslations("homepage-header");

  const itemsForExplore: MenuProps["items"] = [
    {
      key: "1",
      label: "IT",
      children: [
        { key: "1-1", label: "FrontEnd Dev" },
        { key: "1-2", label: "FrontEnd Dev" },
        { key: "1-3", label: "Game Dev" },
      ],
    },
    {
      key: "2",
      label: "Finance",
      children: [
        { key: "2-1", label: "How to improve the way you think about business" },
        { key: "2-2", label: "Test Test" },
      ],
    },
  ];

  return (
    <header className="header">
      <Row align="middle" className="header-row">
        {/* LEFT: Logo + Dropdown */}
        <Col xs={4} sm={4} md={4} lg={3} className="header-left">
          <Image width={80} height={80} className="logo" src="/logo.png" preview={false} />
          <Dropdown className="dropdown" menu={{ items: itemsForExplore }}>
            <FButton className="dropdown__buttonEx" type="text">
                <h4 style={{ margin: 0, textAlign: "center", lineHeight: "1" }}>{t("explore")}</h4>
            </FButton>
          </Dropdown>
        </Col>

        {/* CENTER: Search */}
        <Col xs={16} sm={16} md={16} lg={14} className="header-center">
          <Search className="search" placeholder={t("search")} allowClear size="middle" />
        </Col>

        {/* RIGHT: Cart, Account, Buttons */}
        <Col xs={4} sm={4} md={4} lg={7} className="header-right">
          <ul className={isLogin ? "login" : ""}>
            {isLogin && (
              <>
                <li><FButton type="text">{t("myLearning")}</FButton></li>
                <li><WishlistDropDown wishlist={[]} /></li>
              </>
            )}
            <li><CartDropdown cartItems={[]} /></li>
            {!isLogin ? (
              <>
                <li><FButton type="default">{t("login")}</FButton></li>
                <li><FButton type="primary">{t("signIn")}</FButton></li>
                <li><LanguageSwitcher/></li>
              </>
            ) : (
              <>
                <li><NotifyDropDown notiList={[]} /></li>
                <li><AccountDropdown /></li>
              </>
            )}
          </ul>
        </Col>
      </Row>
    </header>
  );
}

export default HeaderDesktop;
