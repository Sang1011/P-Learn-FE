"use client";

import { Drawer, Button, Grid } from "antd";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import AccountDropdown from "@/components/AccountDropDown";
import CartDropdown from "@/components/CartDropDown";
import WishlistDropDown from "@/components/WishlistDropDown";
import NotifyDropDown from "@/components/NotifyDropDown";
const { useBreakpoint } = Grid;

function HeaderMobile() {
  const screens = useBreakpoint();
  const [open, setOpen] = useState(false);
  const isLogin = true;

  return (
    <header className="header-mobile">
      <Button
        type="text"
        icon={<MenuOutlined style={{ fontSize: "24px" }} />}
        onClick={() => setOpen(true)}
      />
      <Drawer
        title="Menu"
        placement="left"
        closable={true}
        onClose={() => setOpen(false)}
        open={open}
        width={screens.md ? "60%" : "80%"}
      >
        <ul>
          {isLogin ? (
            <>
              <li>My Learning</li>
              <li>
                <WishlistDropDown wishlist={[]} />
              </li>
              <li>
                <NotifyDropDown notiList={[]} />
              </li>
              <li>
                <AccountDropdown />
              </li>
            </>
          ) : (
            <>
              <li>
                <Button type="default">Log in</Button>
              </li>
              <li>
                <Button type="primary">Sign up</Button>
              </li>
            </>
          )}
          <li>
            <CartDropdown cartItems={[]} />
          </li>
        </ul>
      </Drawer>
    </header>
  );
}

export default HeaderMobile;
