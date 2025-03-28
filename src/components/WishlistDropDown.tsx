import { Dropdown, Button, Card } from "antd";
import { IoMdHeartEmpty } from "react-icons/io";
import FButton from "@/components/basicUI/FButton"; 
import { useTranslations } from "next-intl";

interface item {
    id: string;
    name: string;
    price: string;
    author: string;
    quantity: number;
}

interface listItem {
    wishlist: item[]
}



const WishlistDropDown = ({ wishlist }: listItem) => {
  const t = useTranslations("homepage")
  const hasItems = wishlist && wishlist.length > 0;

  const itemsForCart = wishlist.map((item: item) => ({
    key: item.id,
    label: (
      <div style={{ padding: "8px 16px" }}>
        <div>{item.name}</div>
        <div style={{ color: "#888", fontSize: 12 }}>Qty: {item.quantity}</div>
      </div>
    ),
  }));

  return (
    <Dropdown
      menu={{ items: itemsForCart }}
      dropdownRender={(menu) => (
        <div style={{ padding: "12px", width: "300px" }}>
          {hasItems ? (
            <>
            <Card style={{ width: 300 }}>
              <div style={{ maxHeight: "200px", overflowY: "auto" }}>{menu}</div>
              <div style={{ borderTop: "1px solid #eee", marginTop: "12px", paddingTop: "12px" }}>
                <Button type="primary" block>
                  Checkout
                </Button>
              </div>
              </Card>
            </>
          ) : (
            <div style={{ textAlign: "center" }}>
                <Card style={{ width: 300 }}>
                <p>{t("wishlist.wishlistInfoEmpty")}</p>
                <FButton type="link" href="" style={{ marginTop: "12px" }}>
                {t("wishlist.wishlistInfoEmptyMes")}
                </FButton>
            </Card>
              
            </div>
          )}
        </div>
      )}
      placement="bottomRight"
    >
      <FButton type="text" icon={<IoMdHeartEmpty fontSize={24} />} />
    </Dropdown>
  );
};

export default WishlistDropDown;
