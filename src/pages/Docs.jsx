import React from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Hero from "../components/Hero/Hero";
import TrenerioPaz from "../files/Trenerio_pazymejimas.pdf";
import LKTrAIst from "../files/LKTrA_istatai.pdf";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Seo from "../components/Seo/Seo";

const Docs = () => {
  return (
    <>
      <Seo
        title="Lietuvos Krepšinio Trenerių Asociacija"
        description="Dokumentai"
        type="webapp"
        name="Krepšinio Treneris"
      />
      <RegularSection>
        <Hero title="Dokumentai" />
        <div className="cookies">
          <h4>Krepšinio trenerio pažymėjimo įgijimo tvarka</h4>
          <Link to={TrenerioPaz} target="_blank" download>
            <Button>Parsisiųsti</Button>
          </Link>
        </div>
        <div className="cookies">
          <h4>LKTrA Įstatai</h4>
          <Link to={LKTrAIst} target="_blank" download>
            <Button>Parsisiųsti</Button>
          </Link>
        </div>
      </RegularSection>
    </>
  );
};

export default Docs;
