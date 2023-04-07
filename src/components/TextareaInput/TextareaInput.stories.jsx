import React from "react";
import TextareaInput from "./TextareaInput";

export default {
  title: "Components/TextareaInput",
  component: TextareaInput,
};

export const Primary = () => (
  <TextareaInput type="text" label="Name" placeholder="Name" />
);
