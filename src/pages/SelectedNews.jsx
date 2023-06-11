import React from "react";
import { useLocation } from "react-router-dom";
import RegularSection from "../components/RegularSection/RegularSection";
import Hero from "../components/Hero/Hero";
import SelectedNewsCard from "../components/SelectedNewsCard/SelectedNewsCard";
import Loading from "../components/Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss } from "@fortawesome/free-solid-svg-icons";

const SelectedNews = () => {
  const { state } = useLocation();

  if (!state) {
    <Loading />;
  }

  return (
    <>
      <RegularSection>
        <Hero title="Naujienos">
          <FontAwesomeIcon icon={faRss} beatFade />
        </Hero>
        <SelectedNewsCard title={state[0].title} subtitle={state[0].text}>
          <div className="newsContainer">
            <p className="newsDate">{state[0].date.slice(0, 10)}</p>
          </div>
        </SelectedNewsCard>
      </RegularSection>
    </>
  );
};

export default SelectedNews;
