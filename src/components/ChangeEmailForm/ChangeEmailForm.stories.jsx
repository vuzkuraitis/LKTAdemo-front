import React from "react";
import ChangeEmailForm from "./ChangeEmailForm";

export default {
  title: "Views/ChangeEmailForm",
  component: ChangeEmailForm,
};

export const Primary = () => (
  <ChangeEmailForm handleSubmit={(values) => console.log(values)} />
);
