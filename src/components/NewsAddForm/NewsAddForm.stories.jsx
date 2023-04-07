import React from "react";
import NewsAddForm from "./NewsAddForm";

export default {
  title: "Views/NewsAddForm",
  component: NewsAddForm,
};

export const Primary = () => (
  <NewsAddForm handleSubmit={(values) => console.log(values)} />
);
