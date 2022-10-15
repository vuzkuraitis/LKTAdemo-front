import React from "react";
import CardList from "./CardList";

export default {
  title: "Components/CardList",
  component: CardList,
};

const products = [
  {
    number: "SKU0001",
    name: "ACME disc",
    price: "10$",
    dimensions: "20x20x1",
  },
  {
    number: "SKU0002",
    name: "ACME disc",
    price: "8$",
    dimensions: "20x20x1",
  },
  {
    number: "SKU003",
    name: "ACME disc",
    price: "12$",
    dimensions: "20x20x1",
  },
  {
    number: "SKU004",
    name: "ACME disc",
    price: "15$",
    dimensions: "20x20x1",
  },
];

export const Primary = () => <CardList products={products} />;
