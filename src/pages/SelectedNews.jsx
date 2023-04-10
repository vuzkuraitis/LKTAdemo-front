import React from "react";
import { useLocation } from "react-router-dom";
import RegularSection from "../components/RegularSection/RegularSection";
import Hero from "../components/Hero/Hero";
import SelectedNewsCard from "../components/SelectedNewsCard/SelectedNewsCard";
import Loading from "../components/Loading/Loading";

const SelectedNews = () => {
  const { state } = useLocation();

  console.log(state);

  if (!state) {
    <Loading />;
  }

  return (
    <>
      <RegularSection>
        <Hero title="Naujienos" />
        <SelectedNewsCard>
          <div className="newsContainer">
            <h2>{state[0].title}</h2>
            <p>{state[0].text}</p>
          </div>
          <p className="newsDate">{state[0].date.slice(0, 10)}</p>
        </SelectedNewsCard>
      </RegularSection>
    </>
  );
};

export default SelectedNews;
