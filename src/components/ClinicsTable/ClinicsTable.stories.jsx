import React from "react";
import ClinicsTable from "./ClinicsTable";

export default {
  title: "Components/ClinicsTable",
  component: ClinicsTable,
};

export const Primary = () => (
  <ClinicsTable
    number="SKU0001"
    name="ACME Disc"
    price="10$"
    dimensions="20x20x1"
  />
);
