import React from "react";
import { Button, Card } from "antd";
import styles from "./Cards.module.scss";

interface CardItemProps {
  title: string;
  description: string;
  cover_image?: string;
  color: string;
  technologies?: string[];
}

const techColors: { [key: string]: string } = {
  React: "#61DAFB",
  Redux: "#764ABC",
  "React-Router": "#CA4245",
  Axios: "#5A29E4",
  Node: "#FFC107",
};

const CardItem: React.FC<CardItemProps> = ({
  title,
  description,
  cover_image,
  color,
  technologies = [],
}) => (
  <Card
    hoverable
    className={styles.card}
    style={{ backgroundColor: color, position: "relative", height: "400px" }}
  >
    <div className={styles.cardContent}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.technologies}>
        {technologies.map((tech, index) => (
          <Button
            key={index}
            type="primary"
            ghost
            style={{ borderColor: techColors[tech], color: techColors[tech] }}
          >
            {tech}
          </Button>
        ))}
      </div>
    </div>
    {cover_image && (
      <img src={cover_image} alt={title} className={styles.cardImage} />
    )}
  </Card>
);

export default CardItem;
