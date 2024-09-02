import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { PrivateRoute } from "./pages/auth/PrivateRoute";
import Overview from "./pages/Overview";
import Error404 from "./pages/Error404";
import Login from "./pages/auth/Login";
import IdeaNew from "./pages/idea/IdeaNew";
import { useRef } from "react";
import IdeaFind from "./pages/idea/IdeaFind";
import IdeaMy from "./pages/idea/IdeaMy";
import BusinessBrand from "./pages/business/BusinessBrand";
import BusinessLogo from "./pages/business/BusinessLogo";
import BusinessFont from "./pages/business/BusinessFont";
import BusinessColor from "./pages/business/BusinessColor";
import BusinessSlogan from "./pages/business/BusinessSlogan";
import Register from "./pages/auth/Register";
import Home from "./pages/Home/Home";
import Wizard from "./pages/Home/Wizard";
import { MainNavBar } from "./pages/Home/components/MainNavBar";
import { ToastContainer } from 'react-toastify';
import IdeaEdit from "./pages/idea/IdeaEdit";
import IdeaPlanViewer from "./pages/idea/ideaPlanView";
import PlanDetails from "./pages/Plans/PlanDetails";

export default function App() {
  const ref = useRef(null);
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <><ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    style={{ zIndex: 9999, marginTop: 80 }}  // Increase z-index to ensure it appears above the navbar
  />
      {!isLoggedIn ? (
                <MainNavBar />
              ) : <Navbar/>}
      
      <Routes>
        <Route
          index
          path="/"
          element={
              <Home />
          }
        />
        <Route
          index
          path="/plan-details"
          element={
              <PlanDetails />
          }
        />
        <Route
        index
        path="/dashboard"
        element={
          <PrivateRoute>
            <Overview />
          </PrivateRoute>
        }
      />
        <Route
          index
          path="/mainWizard"
          element={
              <Wizard />
          }
        />
        <Route
          path="/idea/new"
          element={
            <PrivateRoute>
              <IdeaNew />
            </PrivateRoute>
          }
        />

        <Route
          path="/idea/my"
          element={
            <PrivateRoute>
              <IdeaMy />
            </PrivateRoute>
          }
        />
        <Route
          path="/idea/edit/:id" 
          element={<PrivateRoute><IdeaEdit /></PrivateRoute>} 
        />
        <Route
          path="/idea/plan/view/:id" 
          element={<PrivateRoute><IdeaPlanViewer /></PrivateRoute>} 
        />
        <Route
          path="/idea/find"
          element={
            <PrivateRoute>
              <IdeaFind />
            </PrivateRoute>
          }
        />

        <Route
          path="/business-identity/brand"
          element={
            <PrivateRoute>
              <BusinessBrand />
            </PrivateRoute>
          }
        />

        <Route
          path="/business-identity/logo"
          element={
            <PrivateRoute>
              <BusinessLogo />
            </PrivateRoute>
          }
        />

        <Route
          path="/business-identity/font"
          element={
            <PrivateRoute>
              <BusinessFont />
            </PrivateRoute>
          }
        />

        <Route
          path="/business-identity/color"
          element={
            <PrivateRoute>
              <BusinessColor />
            </PrivateRoute>
          }
        />

        <Route
          path="/business-identity/slogan"
          element={
            <PrivateRoute>
              <BusinessSlogan />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      
      <Footer />
    </>
  );
}
