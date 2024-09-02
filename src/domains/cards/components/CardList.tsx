import React from "react";
import CardItem from "./CardItem";
import cardsData from "../../../data/cardsData.json";

import styles from "./Cards.module.scss";

const CardList: React.FC = () => (
  <div className={styles.workMainContainer}>
    <div className={styles.cardWrapper}>
      {cardsData.map((card, index) => (
        <CardItem
          key={index}
          title={card.title}
          description={card.description}
          cover_image={card.cover_image}
        />
      ))}
    </div>
  </div>
);

export default CardList;
