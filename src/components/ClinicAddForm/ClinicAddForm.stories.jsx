import React from "react";
import ClinicAddForm from "./ClinicAddForm";

export default {
  title: "Views/ClinicAddForm",
  component: ClinicAddForm,
};

export const Primary = () => (
  <ClinicAddForm handleSubmit={(values) => console.log(values)} />
);
