import React from "react";
import styles from "../../../pages/Pages.module.scss";

const WorkInformationList: React.FC = () => {
  return (
    <div className={styles.informationBlock}>
      <h1 className={styles.mainTitle}>
        Hi, <span className={styles.name}>I'm Oleksandr</span> 👋
      </h1>
      <h3 className={styles.subtitle}>
        <span className={styles.name}>Junior</span> Frontend Engineer
      </h3>
      <p className={styles.description}>
        I'm Sasha, a junior front-end engineer. I enjoy building software that’s
        simple, reliable, and makes life easier for users.
      </p>
    </div>
  );
};

export default WorkInformationList;
