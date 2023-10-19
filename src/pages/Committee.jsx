import React from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Hero from "../components/Hero/Hero";
import Seo from "../components/Seo/Seo";
import Rd from "../assets/RD.jpeg";
import Vs from "../assets/VS.jpeg";
import En from "../assets/EN.jpeg";
import Sk from "../assets/SK.jpeg";
import Tt from "../assets/TT.jpg";
import Rg from "../assets/RG.JPG";
import Ap from "../assets/AP.JPG";
import CardAbout from "../components/CardAbout/CardAbout";

const Committee = () => {
  return (
    <>
      <Seo
        title="Lietuvos Krepšinio Trenerių Asociacija"
        description="Vykdomasis Komitetas"
        type="webapp"
        name="Krepšinio Treneris"
      />
      <RegularSection>
        <Hero title="Vykdomasis Komitetas" />
        <div className="about aboutmaincomittee">
          <div className="aboutinfo">
            <h4>VYKDOMOJO KOMITETO NARIAI</h4>
          </div>
          <div className="aboutpiccomittee">
            <CardAbout className="aboutCard">
              <div className="aboutper aboutcomittee">
                <h4>LKTrA Vykdomojo Komiteto Narys</h4>
                <h3>Rimantas Grigas</h3>
                <div className="imgcomittee">
                  <img src={Rg} alt="Rg" />
                </div>
              </div>
            </CardAbout>
            <CardAbout className="aboutCard">
              <div className="aboutper aboutcomittee">
                <h4>LKTrA Vykdomojo Komiteto Narys</h4>
                <h3>Algirdas Paulauskas</h3>
                <div className="imgcomittee">
                  <img src={Ap} alt="Ap" />
                </div>
              </div>
            </CardAbout>
            <CardAbout className="aboutCard">
              <div className="aboutper aboutcomittee">
                <h4>LKTrA Vykdomojo Komiteto Narė</h4>
                <h3>Rima Daunienė</h3>
                <div className="imgcomittee">
                  <img src={Rd} alt="Rd" />
                </div>
              </div>
            </CardAbout>
            <CardAbout className="aboutCard">
              <div className="aboutper aboutcomittee">
                <h4>LKTrA Vykdomojo Komiteto Narys</h4>
                <h3>Vilius Stanišauskas</h3>
                <div className="imgcomittee">
                  <img src={Vs} alt="Vs" />
                </div>
              </div>
            </CardAbout>
            <CardAbout className="aboutCard">
              <div className="aboutper aboutcomittee">
                <h4>LKTrA Vykdomojo Komiteto Narys</h4>
                <h3>Edas Nickus</h3>
                <div className="imgcomittee">
                  <img src={En} alt="En" />
                </div>
              </div>
            </CardAbout>
            <CardAbout className="aboutCard">
              <div className="aboutper aboutcomittee">
                <h4>LKTrA Vykdomojo Komiteto Narys</h4>
                <h3>Sigitas Krukis</h3>
                <div className="imgcomittee">
                  <img src={Sk} alt="Sk" />
                </div>
              </div>
            </CardAbout>
            <CardAbout className="aboutCard">
              <div className="aboutper aboutcomittee">
                <h4>LKTrA Vykdomojo Komiteto Narys</h4>
                <h3>Tomas Totulis</h3>
                <div className="imgcomittee">
                  <img src={Tt} alt="Tt" />
                </div>
              </div>
            </CardAbout>
          </div>
        </div>
      </RegularSection>
    </>
  );
};

export default Committee;
