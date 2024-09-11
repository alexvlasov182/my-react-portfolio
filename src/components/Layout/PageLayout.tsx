import React from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import styles from "../../pages/Pages.module.scss";

const { Header, Content, Footer } = Layout;

const items: MenuProps["items"] = [
  { key: "work", label: <Link to="/">Work</Link> },
  { key: "about", label: <Link to="/about">About</Link> },
  {
    key: "cv",
    label: (
      <Link
        to="https://drive.google.com/file/d/1WMarOb_wGE5xL-jhpGTOnhxRaey2gs7n/view?usp=sharing"
        target="_blank"
      >
        CV
      </Link>
    ),
  },
];

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <Link
          className={styles.logo}
          style={{ textDecoration: "none", color: "#000" }}
          to="/"
        >
          React<span className={styles.js}>JS</span>
          <span className={styles.dot}>.</span>
        </Link>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          className={styles.menu}
        />
      </Header>
      <Content className={styles.content}>{children}</Content>
      <Footer className={styles.footer}>
        ©{new Date().getFullYear()} Created by Oleksandr Vlasov
      </Footer>
    </Layout>
  );
};

export default PageLayout;
