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
                <h3>Rimantas Grigas</h3>
                <div className="img">
                  <img src={Rg} alt="Rg" />
                </div>
                <h3>Darbo patirtis:</h3>
                <ul>
                  <li>Lietuvos moterų krepšinio rinktinės vyr. treneris</li>
                  <li>
                    Daugkartinis Lietuvos jaunimo krepšinio rinktinių treneris
                  </li>
                  <li>Europos krepšinio čempionatų medalių laimėtojas</li>
                  <li>
                    1988–1992: Kauno Žalgirio dublerių komandos vyr. treneris
                  </li>
                  <li>1996–1999: Kauno „Atleto“ (LKL) vyriausiasis treneris</li>
                  <li>
                    1999-2006: Kauno Žalgirio dublerių (LKAL) vyr. treneris
                  </li>
                  <li>2006-2007: Kauno Žalgiris (LKL): trenerio asistentas</li>
                  <li>
                    2007-2008: Kauno Žalgiris (LKL): vyriausiasis treneris
                  </li>
                  <li>
                    2008-2009: Kauno Žalgiris (LKL): vyriausiasis treneris
                  </li>
                  <li>
                    2009-2010: Kijevo Budivelnik (Ukraina): vyriausiasis
                    treneris
                  </li>
                  <li>2010-2011: Kauno Žalgirio (LKL) vyriausiasis treneris</li>
                  <li>
                    2013-2014: Pasvalio Pieno žvaigždės (LKL): vyriausiasis
                    treneris
                  </li>
                  <li>
                    2014-2015: Minsko Cmoki-Minsk (Baltarusija) vyrų ir moterų
                    komandų kuratorius
                  </li>
                  <li>
                    2017-2018: Pasvalio Pieno žvaigždės (LKL) vyriausiasis
                    treneris
                  </li>
                  <li>
                    2018-2019: Jonavos Sintek-Jonava (NKL) vyr. treneris nuo
                    2019 m. sausio mėn.
                  </li>
                  <li>2021-2022: Mažeikių Mažeikiai (NKL) vyr. treneris</li>
                  <li>
                    2022-2023: Kauno Aistės-LSMU (Baltijos moterų lyga) vyr.
                    treneris
                  </li>
                  <li>2023 - Vilniaus Kibirkšties komandos vyr. treneris</li>
                </ul>
              </div>
            </CardAbout>
            <CardAbout className="aboutCard">
              <div className="aboutper">
                <h4>LKTrA Generalinis sekretorius</h4>
                <h3>Algirdas Paulauskas</h3>
                <div className="img">
                  <img src={Ap} alt="Ap" />
                </div>
                <h3>Darbo patirtis:</h3>
                <ul>
                  <li>Ilgametis Lietuvos moterų rinktinės vyr. treneris</li>
                  <li>
                    Europos moterų krepšinio čempionato nugalėtojų - Lietuvos
                    moterų krepšinio rinktinės treneris
                  </li>
                  <li>1981-1984: Kauno Atletas (Lietuva)</li>
                  <li>1984-1990: Kauno Banga (Lietuva)</li>
                  <li>1990-1995: Bialystoko Wlokniarz (Lenkija)</li>
                  <li>1995-1996: Vroclavo Sleza (Lenkija)</li>
                  <li>1997-1998: Zeliona Guros Zastal (Lenkija)</li>
                  <li>1998-2001: Brzego Odra (Lenkija)</li>
                  <li>2001-2007: Vilniaus Lietuvos telekomas (Lietuva)</li>
                  <li>2008-2011: Kursko Dinamo (Rusija)</li>
                  <li>2011-2012: Jekaterinburgo UMMC (Rusija)</li>
                  <li>2013: Orenburgo Nadiežda (Rusija)</li>
                  <li>
                    2014-2015: Vilniaus Kibirkštis-VIČI (Lietuva) nuo sausio
                    pradžios
                  </li>
                  <li>2015-2016: Vroclavo Sleza (Lenkija)</li>
                  <li>2016-2018: Torunės Energa (Lenkija)</li>
                  <li>2018-2019: Vilniaus Kibirkštis (Lietuva) nuo 02.18</li>
                  <li>
                    2019-2020: Vilniaus Kibirkštis-MRU (Moterų lyga) vyr.
                    treneris
                  </li>
                  <li>2020 iki dabar VKM merginų komandų treneris</li>
                </ul>
              </div>
            </CardAbout>
          </div>
        </div>
      </RegularSection>
    </>
  );
};

export default Docs;
