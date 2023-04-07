import React, { useState, useEffect } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Notification from "../components/Notification/Notification";
import Hero from "../components/Hero/Hero";
import NewsAddForm from "../components/NewsAddForm/NewsAddForm";

const AdminAccount = () => {
  const [error, setError] = useState();
  const [news, setNews] = useState();

  const getNews = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/clinics/clinic`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
    setNews(data);
  };
  useEffect(() => {
    getNews();
  }, []);

  const postNews = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/admin/post-news`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        }
      );
      const data = await res.json();
      console.log(data);

      if (data.err) {
        return setError(data.err);
      }
      return setError(data.msg);
    } catch (err) {
      return setError(err.message);
    }
  };

  return (
    <>
      <RegularSection>
        {error && (
          <Notification handleClick={() => setError(null)}>
            {error}
          </Notification>
        )}
        <Hero title="Add News" />
        <div className="adminSettings">
          <NewsAddForm className="news" handleSubmit={postNews}></NewsAddForm>
        </div>
      </RegularSection>
    </>
  );
};

export default AdminAccount;
