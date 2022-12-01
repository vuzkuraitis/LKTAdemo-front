import React, { useState, useEffect } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import ChangePassForm from "../components/ChangePassForm/ChangePassForm";

const Settings = () => {
  return (
    <>
      <RegularSection>
        <ChangePassForm></ChangePassForm>
      </RegularSection>
    </>
  );
};

export default Settings;
