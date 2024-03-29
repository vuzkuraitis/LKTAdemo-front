import React, { useState, useEffect } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Notification from "../components/Notification/Notification";
import Hero from "../components/Hero/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import CardMaterial from "../components/CardMaterial/CardMaterial";
import ibu from "../assets/Ibu.png";
import wab from "../assets/WAB.png";
import BbAustralia from "../assets/BbAustralia.png";
import Seo from "../components/Seo/Seo";

const Material = () => {
  const [error, setError] = useState();
  const [material, setMaterial] = useState([]);

  const getMaterialData = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/users/material`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();

    setMaterial(data);
  };
  useEffect(() => {
    getMaterialData();
  }, []);

  return (
    <>
      <Seo
        title="Lietuvos Krepšinio Trenerių Asociacija"
        description="Medžiaga"
        type="webapp"
        name="Krepšinio Treneris"
      />
      <RegularSection>
        {error && (
          <Notification handleClick={() => setError(null)}>
            {error}
          </Notification>
        )}
        <Hero title="Metodinė medžiaga">
          <FontAwesomeIcon icon={faBookOpen} beatFade />
        </Hero>
        <CardMaterial>
          <div className="material">
            <div className="imgcontainer">
              <img src={ibu} alt="ibu" />
            </div>
            <div className="materialContent">
              <h3>
                International Basketball University krepšinio trenerių
                nuotolinio mokymo platforma:
              </h3>
              <div>
                {material &&
                  material.map((materials) => (
                    <div key={materials.id}>
                      <a href="https://ibuvideo.com/my-account/" target="blank">
                        https://ibuvideo.com/my-account/
                      </a>
                      <p>
                        Login: <span>{materials.login}</span>
                      </p>
                      <p>
                        Password: <span>{materials.pass}</span>
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </CardMaterial>
        <CardMaterial>
          <div className="material">
            <div className="imgcontainer">
              <img src={wab} alt="wab" />
            </div>
            <div className="materialContent">
              <h3>
                Pasaulinės krepšinio trenerių asociacijos video mokymų
                platforma:
              </h3>
              <div>
                <a href="https://wabc.fiba.com/videos/" target="blank">
                  https://wabc.fiba.com/videos/
                </a>
              </div>
            </div>
          </div>
        </CardMaterial>
        <CardMaterial>
          <div className="material">
            <div className="imgcontainer">
              <img src={BbAustralia} alt="wab" />
            </div>
            <div className="materialContent">
              <h3>Australijos krepšinio trenerių mokymo video platforma:</h3>
              <div>
                <a href="https://coach.basketball.net.au/video/" target="blank">
                  https://coach.basketball.net.au/video/
                </a>
              </div>
            </div>
          </div>
        </CardMaterial>
      </RegularSection>
    </>
  );
};

export default Material;
