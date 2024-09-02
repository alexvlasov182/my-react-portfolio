import React from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import styles from "../../pages/Pages.module.scss";

const { Header, Content, Footer } = Layout;

const items: MenuProps["items"] = [
  { key: "work", label: <Link to="/">Work</Link> },
  { key: "about", label: <Link to="/about">About</Link> },
  { key: "about", label: <Link to="/cv">CV</Link> },
];

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <div className={styles.logo}>
          React<span className={styles.js}>JS</span>
          <span className={styles.dot}>.</span>
        </div>
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
