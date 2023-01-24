import React from "react";
import SubmitClinicForm from "./SubmitClinicForm";

export default {
  title: "Views/SubmitClinicForm",
  component: SubmitClinicForm,
};

export const Primary = () => (
  <SubmitClinicForm handleSubmit={(values) => console.log(values)} />
);
