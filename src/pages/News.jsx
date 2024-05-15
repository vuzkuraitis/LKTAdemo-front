import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RegularSection from "../components/RegularSection/RegularSection";
import Hero from "../components/Hero/Hero";
import NewsCard from "../components/NewsCard/NewsCard";
import Loading from "../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import Seo from "../components/Seo/Seo";
// import Seminaras2024 from "../files/Krepsinio_seminaras_2024.pdf";

const News = () => {
  const [news, setNews] = useState();

  const navigate = useNavigate();

  const getNews = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/users/news`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    setNews(
      data.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      })
    );
  };
  useEffect(() => {
    getNews();
  }, []);

  const getSelectedNews = async (id) => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/users/selected_news?id=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    navigate(`selected-news?=${id}`, {
      state: data,
    });
  };

  if (!news) {
    <Loading />;
  }

  return (
    <>
      <Seo
        title="Lietuvos Krepšinio Trenerių Asociacija"
        description="Naujienos"
        type="webapp"
        name="Krepšinio Treneris"
      />
      <RegularSection>
        <Hero title="Naujienos">
          <FontAwesomeIcon icon={faRss} beatFade />
        </Hero>
        <div className="newsContainer">
          {news &&
            news.map((newsnew) => (
              <NewsCard
                className="news"
                key={newsnew.id}
                title={newsnew.title}
                subtitle={newsnew.text}
              >
                <div>
                  <Link
                    to=""
                    className="newslink"
                    id={newsnew.id}
                    onClick={(e) => {
                      getSelectedNews(Number(e.currentTarget.id));
                    }}
                  >
                    Skaityti...
                  </Link>
                </div>
                <p className="newsDate">{newsnew.date.slice(0, 10)}</p>
              </NewsCard>
            ))}
        </div>
      </RegularSection>
    </>
  );
};

export default News;
