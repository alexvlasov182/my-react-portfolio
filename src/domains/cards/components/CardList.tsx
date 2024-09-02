import React from "react";
import { Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";
import WorkMainTitle from "../domains/works/components/WorkMainTitle.tsx";
import WorkDescription from "../domains/works/components/WorkDescription.tsx";
import CardList from "../domains/works/components/CardList.tsx";

// @ts-ignore
import faceImage from "../assets/images/front-img.png";

const { Header, Content, Footer } = Layout;

const items: MenuProps["items"] = ["Work", "About", "CV"].map((key) => ({
  key,
  label: `${key}`,
}));
const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{ display: "flex", alignItems: "center", background: "#fff" }}
      >
        <div className="demo-logo">Anastasiia Vlasova</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            backgroundColor: "#fff",
            justifyContent: "end",
          }}
        />
      </Header>
      <Content style={{ padding: "0 0px", background: colorBgContainer }}>
        <div
          style={{
            minHeight: 168,
            borderRadius: borderRadiusLG,
          }}
        >
          <WorkMainTitle />
          <WorkDescription />
          <CardList />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Anastasiia Vlasova Design ©{new Date().getFullYear()} Created by
        Oleksandr Vlasov
      </Footer>
    </Layout>
  );
};

export default App;
