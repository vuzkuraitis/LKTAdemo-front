import React from "react";
import InfoCard from "./InfoCard";

export default {
  title: "Components/InfoCard",
  component: InfoCard,
};

export const Primary = () => (
  <InfoCard title="Title" subtitle="Your subtitle is here" />
);
