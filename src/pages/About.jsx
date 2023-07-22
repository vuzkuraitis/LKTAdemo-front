import React from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Hero from "../components/Hero/Hero";
import Rg from "../assets/RG.JPG";
import Ap from "../assets/AP.JPG";
import CardAbout from "../components/CardAbout/CardAbout";

const Docs = () => {
  return (
    <>
      <RegularSection>
        <Hero title="Apie mus" />
        <div className="about">
          <div className="aboutinfo">
            <h4>LKTrA VEIKLOS PAMATINĖS NUOSTATOS</h4>
            <p>
              Krepšinio treneris – pagrindinis ir atraminis Lietuvos krepšinio
              sistemos objektas ir pagrindinis Lietuvos krepšinio sėkmės
              garantas; Krepšinio trenerių bendruomenės pagrindas – narystė
              LKTrA organizacijoje; Krepšinio (sporto) trenerių kvalifikacijos
              reikalavimus nustato LR įstatymai. Lietuvos krepšinio treneriai
              baigdami specializuotą universitetinį 4 metų sporto (krepšinio)
              bakalauro kursą yra vieni ilgiausiai besimokančių krepšinio
              trenerių pasauliniu mastu. Autonomiškos Lietuvos krepšinio
              trenerių organizacijos veikla visų pirma yra fokusuota į
              tobulėjimo skatinimą ir padėjimą. Egzistuojanti Lietuvos krepšinio
              trenerių rengimo sistema jau daugelį metų esti viena stabiliausių
              pasaulinėje praktikoje egzistuojančių sistemų, yra sektinas
              pavyzdys daugeliui pasaulio šalių, kai trenerių rengimas yra iš
              esmės vykdomas per atskirą trenerius vienijančią organizaciją ir
              specializuotą universitetinę studijų programą.
            </p>
          </div>
          <div className="aboutpic">
            <CardAbout className="aboutCard">
              <div className="aboutper">
                <h4>LKTrA Prezidentas</h4>
                <img src={Rg} alt="Rg" />
              </div>
            </CardAbout>
            <CardAbout>
              <div className="aboutper">
                <h4>LKTrA Generalinis sekretorius</h4>
                <img src={Ap} alt="Ap" />
              </div>
            </CardAbout>
          </div>
        </div>
      </RegularSection>
    </>
  );
};

export default Docs;
