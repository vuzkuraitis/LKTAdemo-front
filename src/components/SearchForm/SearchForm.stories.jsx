import React from "react";
import SearchForm from "./SearchForm";

export default {
  title: "Views/SearchForm",
  component: SearchForm,
};

export const Primary = () => (
  <SearchForm handleSubmit={(values) => console.log(values)} />
);
