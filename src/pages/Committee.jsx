import React from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Hero from "../components/Hero/Hero";
import Seo from "../components/Seo/Seo";

const Committee = () => {
  return (
    <>
      <Seo
        title="Lietuvos Krepšinio Trenerių Asociacija"
        description="Vykdantysis Komitetas"
        type="webapp"
        name="Krepšinio Treneris"
      />
      <RegularSection>
        <Hero title="Vykdomasis Komitetas" />
        <div className="about">
          <h4>Jau greit...</h4>
        </div>
      </RegularSection>
    </>
  );
};

export default Committee;
