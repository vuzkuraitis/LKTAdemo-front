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
        <div className="studies">
          <h4>BAKALAURO STUDIJOS</h4>
          <h4>
            Lietuvos universitetai, vykdantys studijas sporto krypčių grupėje:
          </h4>
          <p>1 krypčių grupė:</p>
          <p>Pasiekimų sportas</p>
          <table>
            <thead>
              <tr>
                <th>Aukštoji mokykla</th>
                <th>Studijų programa</th>
                <th>Kvalifikacinis laipsnis</th>
                <th>Specializacija</th>
                <th>Nuoroda</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lietuvos sporto universitetas</td>
                <td>Treniravimo sistemos</td>
                <td>Sporto bakalauro kvalifikacinis laipsnis</td>
                <td className="big">
                  Specializacijos: aerobinė gimnastika; asmeninis treneris;
                  atletinis rengimas; badmintonas; baidarių ir kanojų
                  irklavimas; beisbolas; boksas; buriavimas; dviračių sportas;
                  dziudo ir savigynos imtynės; fechtavimas; futbolas;
                  graikų-romėnų ir laisvosios imtynės; irklavimas; krepšinis;
                  kultūrizmas ir fitnesas; karate; lengvoji atletika; meninė
                  gimnastika; neįgaliųjų sportas; orientavimosi sportas;
                  plaukimas; rankinis; regbis; rungtynių šokiai; šaudymas;
                  šiuolaikinė penkiakovė; sportinė gimnastika; sportiniai
                  šokiai; stalo tenisas; techninio sporto specializacija
                  (automobilių sportas, motociklų sportas, kartingo sportas,
                  motorlaivių sportas, aviacijos sportas, vandens motociklų
                  sportas)3; triatlonas; jėgos trikovė ir svarsčių kilnojimas;
                  tenisas; tinklinis; žiemos sportas (slidinėjimas, kalnų
                  slidinėjimas, biatlonas, snieglentės); žirginis sportas
                </td>
                <td>
                  <a href="https://www.lsu.lt/studijos/studiju-programos/pirmosios-pakopos-bakalauro-studijos/treniravimo-sistemos/">
                    https://www.lsu.lt/studijos/studiju-programos/pirmosios-pakopos-bakalauro-studijos/treniravimo-sistemos/
                  </a>
                </td>
              </tr>
              <tr>
                <td>Vytauto Didžiojo universitetas</td>
                <td>Sporto studijos</td>
                <td>Sporto bakalauro kvalifikacinis laipsnis</td>
                <td className="big">
                  Sporto šakos trenerio kvalifikacija, suteikiant papildomą
                  galimybę pasirinkti asmeninio trenerio (Tarptautinis EREPS
                  pažymėjimas), atletinio rengimo trenerio; sporto
                  psichologijos; sportinės veiklos analizės, Kauno Žalgirio
                  gilinamuosius modulius.
                </td>
                <td>
                  <a href="https://www.vdu.lt/lt/studiju-programa/sporto-studijos/">
                    https://www.vdu.lt/lt/studiju-programa/sporto-studijos/
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>2 krypčių grupė:</p>
          <p>Laisvalaikio sportas</p>
          <table>
            <thead>
              <tr>
                <th>Aukštoji mokykla</th>
                <th>Studijų programa</th>
                <th>Kvalifikacinis laipsnis</th>
                <th>Specializacija</th>
                <th>Nuoroda</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Klaipėdos universitetas</td>
                <td>Laisvalaikio sportas</td>
                <td>
                  Sporto bakalauro kvalifikacinis laipsnis ir pedagogo profesinė
                  kvalifikacija
                </td>
                <td>
                  Specializacijos – futbolas, krepšinis, laisvalaikio sportas
                </td>
                <td>
                  <a href="https://www.ku.lt/lt/bakalauro-studijos-2/sportas/laisvalaikio-sportas">
                    https://www.ku.lt/lt/bakalauro-studijos-2/sportas/laisvalaikio-sportas
                  </a>
                </td>
              </tr>
              <tr>
                <td>Lietuvos sporto universitetas</td>
                <td>Pratimai, mityba ir streso valdymas</td>
                <td>Sporto bakalauro kvalifikacinis laipsnis</td>
                <td> - </td>
                <td>
                  <a href="https://www.lsu.lt/studijos/studiju-programos/pirmosios-pakopos-bakalauro-studijos/pratimai-mityba-ir-stresas/">
                    https://www.lsu.lt/studijos/studiju-programos/pirmosios-pakopos-bakalauro-studijos/pratimai-mityba-ir-stresas/
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <h4>BAKALAURO STUDIJOS</h4>
          <h4>
            Lietuvos universitetai, vykdantys studijas sporto krypčių grupėje:
          </h4>
          <table>
            <thead>
              <tr>
                <th>Aukštoji mokykla</th>
                <th>Studijų programa</th>
                <th>Kvalifikacinis laipsnis</th>
                <th>Nuoroda</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lietuvos sporto universitetas</td>
                <td>Treniravimo sistemos</td>
                <td>Sporto magistro kvalifikacinis laipsnis</td>
                <td>
                  <a href="https://www.lsu.lt/studijos/studiju-programos/antrosios-pakopos-magistranturos-studijos/treniravimo-sistemos/">
                    https://www.lsu.lt/studijos/studiju-programos/antrosios-pakopos-magistranturos-studijos/treniravimo-sistemos/
                  </a>
                </td>
              </tr>
              <tr>
                <td>Lietuvos sporto universitetas</td>
                <td>Sportinės veiklos analizė</td>
                <td>Sporto magistro kvalifikacinis laipsnis</td>
                <td>
                  <a href="https://www.lsu.lt/studijos/studiju-programos/antrosios-pakopos-magistranturos-studijos/sportines-veiklos-analize-international-master-performance-analysis-sport/">
                    https://www.lsu.lt/studijos/studiju-programos/antrosios-pakopos-magistranturos-studijos/sportines-veiklos-analize-international-master-performance-analysis-sport/
                  </a>
                </td>
              </tr>
              <tr>
                <td>Lietuvos sporto universitetas</td>
                <td>Krepšinio treniravimas ir valdymas</td>
                <td>Sporto magistro kvalifikacinis laipsnis</td>
                <td>
                  <a href="https://www.lsu.lt/studijos/studiju-programos/antrosios-pakopos-magistranturos-studijos/krepsinio-treniravimas-ir-valdymas/">
                    https://www.lsu.lt/studijos/studiju-programos/antrosios-pakopos-magistranturos-studijos/krepsinio-treniravimas-ir-valdymas/
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <h4>NEFORMALUS MOKYMAS</h4>
          <table>
            <thead>
              <tr>
                <th>Universitetas</th>
                <th>Kursų pavadinimas</th>
                <th>Nuoroda</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Internation Basketball University (IBU)</td>
                <td>Kursai krepšinio treneriams</td>
                <td className="tooL">
                  <a href="http://www.basketballstudies.com/avada_portfolio/basketball_courses/">
                    http://www.basketballstudies.com/avada_portfolio/basketball_courses/
                  </a>
                </td>
              </tr>
              <tr>
                <td>Internation Basketball University (IBU)</td>
                <td>Kursai krepšinio vadybininkams</td>
                <td className="tooL">
                  <a href="http://www.basketballstudies.com/avada_portfolio/basketball_courses-2/">
                    http://www.basketballstudies.com/avada_portfolio/basketball_courses-2/
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </RegularSection>
    </>
  );
};

export default Studies;
