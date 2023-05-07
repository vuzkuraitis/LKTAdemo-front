import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import ScrollToTop from "./ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const License = lazy(() => import("./pages/License"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Account = lazy(() => import("./pages/Account"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const NewPassword = lazy(() => import("./pages/NewPassword"));
const Settings = lazy(() => import("./pages/Settings"));
const Payment = lazy(() => import("./pages/Payment"));
const ClinicPayment = lazy(() => import("./pages/ClinicPayment"));
const Clinics = lazy(() => import("./pages/Clinics"));
const Clinic = lazy(() => import("./pages/Clinic"));
const Cookies = lazy(() => import("./pages/Cookies"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Material = lazy(() => import("./pages/Material"));
const News = lazy(() => import("./pages/News"));
const Admin = lazy(() => import("./pages/Admin"));
const AdminAccount = lazy(() => import("./pages/AdminAccount"));
const AdminClinics = lazy(() => import("./pages/AdminClinics"));
const AdminNews = lazy(() => import("./pages/AdminNews"));
const Studies = lazy(() => import("./pages/Studies"));
const SelectedNews = lazy(() => import("./pages/SelectedNews"));

const Router = () => {
  function RequireAuth({ children }) {
    const token = localStorage.getItem("token");
    let location = useLocation();

    if (!token) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
  }

  return (
    <BrowserRouter>
      <Nav />
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route
            exact
            path="/admin/admin-account"
            element={
              <RequireAuth>
                <AdminAccount />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/admin/admin-clinics"
            element={
              <RequireAuth>
                <AdminClinics />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/admin/admin-news"
            element={
              <RequireAuth>
                <AdminNews />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/account"
            element={
              <RequireAuth>
                <Account />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/payment"
            element={
              <RequireAuth>
                <Payment />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/clinic-payment"
            element={
              <RequireAuth>
                <ClinicPayment />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/account/clinics"
            element={
              <RequireAuth>
                <Clinics />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/clinics/clinic"
            element={
              <RequireAuth>
                <Clinic />
              </RequireAuth>
            }
          />
          <Route exact path="/license" element={<License />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/new-password" element={<NewPassword />} />
          <Route
            exact
            path="/account/settings"
            element={
              <RequireAuth>
                <Settings />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/account/material"
            element={
              <RequireAuth>
                <Material />
              </RequireAuth>
            }
          />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/cookie-policy" element={<Cookies />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/news/selected-news" element={<SelectedNews />} />
          <Route exact path="/studies" element={<Studies />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
