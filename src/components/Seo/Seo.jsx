import React from "react";
import { Helmet } from "react-helmet-async";
import * as S from "./Seo.styles";

const Seo = ({ title, description, type, name }) => {
  return (
    <S.Seo>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:creator" content={name} />
        <meta name="twitter:card" content={type} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
    </S.Seo>
  );
};

export default Seo;
