import React from "react";
import { Card } from "antd";

interface CardItemProps {
  title: string;
  description: string;
  cover_image?: string;
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  description,
  cover_image,
}) => (
  <Card
    hoverable
    style={{ width: "45%", marginBottom: "20px" }}
    cover={cover_image ? <img alt="card" src={cover_image} /> : null}
  >
    <h2>{title}</h2>
    <p>{description}</p>
  </Card>
);

export default CardItem;
