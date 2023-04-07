import React from "react";
import SelectedNewsCard from "./SelectedNewsCard";

export default {
  title: "Components/SelectedNewsCard",
  component: SelectedNewsCard,
};

export const Primary = () => (
  <SelectedNewsCard title="Title" subtitle="Your subtitle is here" />
);
