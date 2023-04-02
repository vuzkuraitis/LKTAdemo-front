import React from "react";
import CoachesTable from "./CoachesTable";

export default {
  title: "Components/CoachesTable",
  component: CoachesTable,
};

export const Primary = () => (
  <CoachesTable
    number="SKU0001"
    name="ACME Disc"
    price="10$"
    dimensions="20x20x1"
  />
);
