import React from "react";
import AdminLoginForm from "./AdminLoginForm";

export default {
  title: "Views/AdminLoginForm",
  component: AdminLoginForm,
};

export const Primary = () => (
  <AdminLoginForm handleSubmit={(values) => console.log(values)} />
);
