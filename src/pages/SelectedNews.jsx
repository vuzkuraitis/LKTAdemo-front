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
        <div className="newsContainer">
          <SelectedNewsCard
            className="news"
            title={state[0].title}
            subtitle={state[0].text}
          >
            <p className="newsDate">{state[0].date.slice(0, 10)}</p>
          </SelectedNewsCard>
        </div>
      </RegularSection>
    </>
  );
};

export default SelectedNews;
