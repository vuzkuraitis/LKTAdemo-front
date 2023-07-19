import React from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Hero from "../components/Hero/Hero";
import TrenerioPaz from "../files/trenerio_pazymejimas.doc";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

const Cookies = () => {
  return (
    <>
      <RegularSection>
        <Hero title="Dokumentai" />
        <div className="cookies">
          <h4>Krepšinio trenerio pažymėjimo įgijimo tvarka</h4>
          <Link to={TrenerioPaz} target="_blank" download>
            <Button>Trenerio Pažymėjimas</Button>
          </Link>
        </div>
      </RegularSection>
    </>
  );
};

export default Cookies;
