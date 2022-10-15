import React from "react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
};

export const Primary = () => (
  <Card number="SKU0001" name="ACME Disc" price="10$" dimensions="20x20x1" />
);
