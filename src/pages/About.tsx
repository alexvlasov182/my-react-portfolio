import React from "react";

import { GithubOutlined, LinkedinFilled } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

import styles from "./Pages.module.scss";
import PageLayout from "../components/Layout/PageLayout";
import AboutInformationList from "../domains/cards/components/AboutInformationItem";

const About: React.FC = () => {
  return (
    <PageLayout>
      <div className={styles.contentPadding}>
        <AboutInformationList />
        <div className={styles.icons}>
          <Link to="https://github.com/alexvlasov182" target="_blank">
            <GithubOutlined />
          </Link>
          {/* https://www.linkedin.com/in/oleksandr-vlasov-9969ab19b/ */}
          <Link
            to="https://www.linkedin.com/in/oleksandr-vlasov-9969ab19b/"
            target="_blank"
          >
            <LinkedinFilled />
          </Link>
        </div>

        <div className={styles.buttonContainer}>
          <Link
            to="https://drive.google.com/file/d/1WMarOb_wGE5xL-jhpGTOnhxRaey2gs7n/view?usp=sharing"
            target="_blank"
          >
            <Button type="primary">Resume</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
