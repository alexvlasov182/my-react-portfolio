import React from "react";

import { GithubOutlined, LinkedinFilled } from "@ant-design/icons";
import { Button } from "antd";

import styles from "./Pages.module.scss";
import PageLayout from "../components/Layout/PageLayout";

const About: React.FC = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>
          Hi, I am <span className={styles.name}>Oleksandr Vlasov</span>
        </h1>
        <h3 className={styles.subtitle}>A Front-End Engineer</h3>
        <p className={styles.description}>
          Hello, my name is Oleksandr, and I am a Junior Software Engineer who
          is passionate about server-side development. I spend a significant
          amount of my free time practicing and improving my skills in Back-End.
          Additionally, I have some knowledge in HTML, CSS, JavaScript, React,
          and Bootstrap for Front-End development.
        </p>
        <div className={styles.icons}>
          <GithubOutlined />
          <LinkedinFilled />
        </div>

        <div className={styles.buttonContainer}>
          <Button>Resume</Button>
        </div>

        {/* <h2 className={styles.projectTitle}>Projects</h2> */}
      </div>
    </PageLayout>
  );
};

export default About;
