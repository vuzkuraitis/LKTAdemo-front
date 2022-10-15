import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

const Home = lazy(() => import("./pages/Home"));
const License = lazy(() => import("./pages/License"));
const Register = lazy(() => import("./pages/Register"));

const Router = () => {
  return (
    <BrowserRouter onUpdate={() => window.scrollTo({ left: 0, top: 50 })}>
      <Nav />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
            onUpdate={() => window.scrollTo({ left: 0, top: 50 })}
          />
          <Route
            exact
            path="/license"
            element={<License />}
            onUpdate={() => window.scrollTo({ left: 0, top: 50 })}
          />
          <Route
            exact
            path="/register"
            element={<Register />}
            onUpdate={() => window.scrollTo({ left: 0, top: 50 })}
          />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
