import { Dropdown, Card } from "antd";
import { IoMdNotificationsOutline } from "react-icons/io";
import FButton from "@/components/basicUI/FButton"; 
import { useTranslations } from "next-intl";

interface notify {
    id: string;
    name: string;
    author: string;
    time: string;
    description: string;
}

interface listNoti {
    notiList: notify[]
}

const NotifyDropDown = ({ notiList }: listNoti) => {
  const t = useTranslations("homepage");
  const hasItems = notiList && notiList.length > 0;

  const itemsForCart = notiList.map((item: notify) => ({
    key: item.id,
    label: (
      <div style={{ padding: "8px 16px", justifyContent: "space-between", display: "flex" }}>
        <div>{item.author}</div>
        <div style={{ color: "#888", fontSize: 12 }}>Qty: {item.description}</div>
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
              </Card>
            </>
          ) : (
            
            <Card title={t("notification.title")} style={{ width: 300}}>
                <p style={{ textAlign: 'center' }}>{t("notification.empty")}</p>
            </Card>
          )}
        </div>
      )}
      placement="bottomRight"
    >
      <FButton type="text" icon={<IoMdNotificationsOutline fontSize={24} />} />
    </Dropdown>
  );
};

export default NotifyDropDown;