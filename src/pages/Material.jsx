import React, { useState } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Notification from "../components/Notification/Notification";
import Hero from "../components/Hero/Hero";

const Settings = () => {
  const [error, setError] = useState();

  return (
    <>
      <RegularSection>
        {error && (
          <Notification handleClick={() => setError(null)}>
            {error}
          </Notification>
        )}
        <Hero title="Metodinė medžiaga" />
        <div className="settings">
          <h4>Jau greitai</h4>
        </div>
      </RegularSection>
    </>
  );
};

export default Settings;
