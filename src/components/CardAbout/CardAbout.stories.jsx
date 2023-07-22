import React from "react";
import CardAbout from "./CardAbout";

export default {
  title: "Components/CardAbout",
  component: CardAbout,
};

export const Primary = () => (
  <CardAbout
    number="SKU0001"
    name="ACME Disc"
    price="10$"
    dimensions="20x20x1"
  />
);
