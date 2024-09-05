import React from "react";
import CardList from "../domains/cards/components/CardList";

import styles from "./Pages.module.scss";

import PageLayout from "../components/Layout/PageLayout";
import WorkInformationList from "../domains/cards/components/WorkInformationItem";

const Home: React.FC = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <WorkInformationList />
        <CardList />
      </div>
    </PageLayout>
  );
};

export default Home;
