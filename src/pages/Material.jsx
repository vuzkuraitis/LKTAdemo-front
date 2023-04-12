import React, { useState } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Notification from "../components/Notification/Notification";
import Hero from "../components/Hero/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

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
        <Hero title="Metodinė medžiaga">
          <FontAwesomeIcon icon={faBookOpen} beatFade />
        </Hero>
        <div className="settings">
          <h4>Jau greitai</h4>
        </div>
      </RegularSection>
    </>
  );
};

export default Settings;
