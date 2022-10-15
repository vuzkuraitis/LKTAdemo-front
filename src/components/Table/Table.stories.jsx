import React from "react";
import Table from "./Table";

export default {
  title: "Components/Table",
  component: Table,
};

const options = [{ name: "Bench Press" }, { name: "Kettlebell Swing" }];

export const Primary = () => <Table options={options} />;
