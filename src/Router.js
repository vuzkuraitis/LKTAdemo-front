import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

const Home = lazy(() => import("./pages/Home"));
const License = lazy(() => import("./pages/License"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Account = lazy(() => import("./pages/Account"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const NewPassword = lazy(() => import("./pages/NewPassword"));
const Settings = lazy(() => import("./pages/Settings"));

const Router = () => {
  const token = localStorage.getItem("token");
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
          <Route
            exact
            path="/login"
            element={<Login />}
            onUpdate={() => window.scrollTo({ left: 0, top: 50 })}
          />
          <Route
            exact
            path="/forgot-password"
            element={<ForgotPassword />}
            onUpdate={() => window.scrollTo({ left: 0, top: 50 })}
          />
          <Route
            exact
            path="/new-password"
            element={<NewPassword />}
            onUpdate={() => window.scrollTo({ left: 0, top: 50 })}
          />
          <Route
            exact
            path="/account"
            element={token ? <Account /> : <Navigate to="/" />}
            onUpdate={() => window.scrollTo({ left: 0, top: 50 })}
          />
          <Route
            exact
            path="/settings"
            element={token ? <Settings /> : <Navigate to="/" />}
            onUpdate={() => window.scrollTo({ left: 0, top: 50 })}
          />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
