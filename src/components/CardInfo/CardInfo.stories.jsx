import React from "react";
import CardInfo from "./CardInfo";

export default {
  title: "Components/CardInfo",
  component: CardInfo,
};

export const Primary = () => (
  <CardInfo
    number="SKU0001"
    name="ACME Disc"
    price="10$"
    dimensions="20x20x1"
  />
);
