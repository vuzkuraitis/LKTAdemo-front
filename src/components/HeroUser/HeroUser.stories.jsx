import React from "react";
import HeroUser from "./HeroUser";

export default {
  title: "Components/HeroUser",
  component: HeroUser,
};

export const Primary = () => (
  <HeroUser title="Title" subtitle="Your subtitle is here" />
);
