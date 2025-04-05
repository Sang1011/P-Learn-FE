"use client"
import FButton from "@/components/basicUI/FButton";
import { useLanguage } from "@/hooks/useLanguage";
import { Dropdown, MenuProps } from "antd";
import { useTranslations } from "next-intl";
import { HiUserCircle } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";

const AccountDropdown = () => {
  const t = useTranslations("userAccount");
  const {language} = useLanguage();
  const items: MenuProps["items"] = [
    {
      key: "profile",
      type: "group",
      label: (
        <div
          style={{
            padding: "10px 10px",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <FButton
            icon={<HiUserCircle style={{ fontSize: "64px" }} />}
            type="link"
          ></FButton>
          <div>
            <h4
              style={{
                margin: 0,
                fontWeight: 600,
                fontSize: "16px",
                color: "var(--textColor)",
              }}
            >
              Nguyen Van AAAAAAA
            </h4>
            <p style={{ margin: 0, color: "var(--textColor)", fontSize: 12 }}>
              user@gmail.com
            </p>
          </div>
        </div>
      ),
    },
    { type: "divider", className: "dividerMenu" },
    {
      key: "my-learning",
      label: <h4 style={{ margin: 0, fontSize: 14 }}>{t("myLearning")}</h4>,
      onClick: () => {
        console.log("Go to My Learning");
      },
    },
    {
      key: "my-cart",
      label: <h4 style={{ margin: 0, fontSize: 14 }}>{t("myCart")}</h4>,
      onClick: () => {
        console.log("Go to My Cart");
      },
    },
    {
      key: "my-wishlist",
      label: <h4 style={{ margin: 0, fontSize: 14 }}>{t("wishlist")}</h4>,
      onClick: () => {
        console.log("Go to My Learning");
      },
    },
    { type: "divider", className: "dividerMenu" },
    {
      key: "notifications",
      label: <h4 style={{ margin: 0, fontSize: 14 }}>{t("notifications")}</h4>,
      onClick: () => {
        console.log("Go to My notifications");
      },
    },
    { type: "divider", className: "dividerMenu" },
    {
      key: "my-account-setting",
      label: <h4 style={{ margin: 0, fontSize: 14 }}>{t("accountSetting")}</h4>,
      onClick: () => {
        console.log("Go to My acount setting");
      },
    },
    {
      key: "my-purchase-history",
      label: <h4 style={{ margin: 0, fontSize: 14 }}>{t("purchaseHistory")}</h4>,
      onClick: () => {
        console.log("Go to My purchase history");
      },
    },
    { type: "divider", className: "dividerMenu" },
    {
      key: "language",
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4 style={{ margin: 0, width: "60%" }}>{t("language")}</h4>
          <div
            style={{
              display: "flex",
              width: "40%",
              justifyContent: "center",
              gap: "6px",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 14, color: "var(--textColor)" }}>
              {t(`locale.${language}`)}
            </span>
            <span
              style={{
                fontSize: 22,
                color: "var(--textColor)",
                lineHeight: "100%",
              }}
            >
              <TbWorld />
            </span>
          </div>
        </div>
      ),
      onClick: () => {
        console.log("Change language!");
      },
    },
    { type: "divider", className: "dividerMenu" },
    {
      key: "public-profile",
      label: <h4 style={{ margin: 0, fontSize: 14 }}>{t("publicProfile")}</h4>,
      onClick: () => {
        console.log("Go to public profile");
      },
    },
    {
      key: "edit-profile",
      label: <h4 style={{ margin: 0, fontSize: 14 }}>{t("editProfile")}</h4>,
      onClick: () => {
        console.log("Go to edit profile");
      },
    },
    { type: "divider", className: "dividerMenu" },
    {
      key: "logout",
      label: <h4 style={{ margin: 0, fontSize: 14 }}>{t("logout")}</h4>,
      onClick: () => {
        console.log("Logout!");
      },
    },
  ];

  return (
    <>
      <Dropdown
        menu={{ items }}
        placement="bottomLeft"
      >
        <FButton
          icon={<HiUserCircle style={{ fontSize: "32px" }} />}
          type="link"
        ></FButton>
      </Dropdown>
    </>
  );
};

export default AccountDropdown;
