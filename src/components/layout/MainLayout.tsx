// "use client";

// import { Layout, Menu } from "antd";
// import { useState } from "react";
// import { HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";

// const { Header, Sider, Content, Footer } = Layout;

// export default function MainLayout({ children }: { children: React.ReactNode }) {
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <Layout style={{ minHeight: "100vh" }}>
//       {/* Sidebar */}
//       <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
//         <div className="logo" style={{ color: "white", textAlign: "center", padding: "16px" }}>
//           LOGO
//         </div>
//         <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
//           <Menu.Item key="1" icon={<HomeOutlined />}>
//             Home
//           </Menu.Item>
//           <Menu.Item key="2" icon={<UserOutlined />}>
//             Profile
//           </Menu.Item>
//           <Menu.Item key="3" icon={<SettingOutlined />}>
//             Settings
//           </Menu.Item>
//         </Menu>
//       </Sider>

//       {/* Main Layout */}
//       <Layout>
//         <Header style={{ background: "#fff", padding: "0 16px", fontWeight: "bold" }}>Dashboard</Header>
//         <Content style={{ margin: "16px", padding: "16px", background: "#fff", borderRadius: "8px" }}>
//           {children}
//         </Content>
//         <Footer style={{ textAlign: "center" }}>© 2025 My App</Footer>
//       </Layout>
//     </Layout>
//   );
// }
