import React from "react";
import NewsCard from "./NewsCard";

export default {
  title: "Components/NewsCard",
  component: NewsCard,
};

export const Primary = () => (
  <NewsCard title="Title" subtitle="Your subtitle is here" />
);
