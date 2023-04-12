import React from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Hero from "../components/Hero/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

const Studies = () => {
  return (
    <>
      <RegularSection>
        <Hero title="Studijos">
          <FontAwesomeIcon icon={faBuildingColumns} beatFade />
        </Hero>
        <div className="settings">
          <h4>Jau greitai</h4>
        </div>
      </RegularSection>
    </>
  );
};

export default Studies;
