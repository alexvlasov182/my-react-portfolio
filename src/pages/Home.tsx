import React from "react";
import CardList from "../domains/cards/components/CardList";

import styles from "./Pages.module.scss";

import PageLayout from "../components/Layout/PageLayout";

const Home: React.FC = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Work with Description...</h1>
        <CardList />
      </div>
    </PageLayout>
  );
};

export default Home;
