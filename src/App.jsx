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
import IdeaEdit from "./pages/idea/IdeaEdit";
import IdeaPlanViewer from "./pages/idea/ideaPlanView";
import PlanDetails from "./pages/Plans/PlanDetails";
import { AuthProvider } from "./config/AuthContext";
import { IdeaProvider } from "./config/ideaDataContext";
import SocialMidea from "./pages/marketing/SocialMidea";
import { MyDesign } from "./pages/marketing/SocialMidea/MyDesign";
import { NewDesign } from "./pages/marketing/SocialMidea/NewDesign";
import { SEO } from "./pages/marketing/SEO/SEO";
import { CreateNewBlog } from "./pages/marketing/Blogs/CreateNewBlog";
import { EmailMarketing } from "./pages/marketing/EmailMarketing/EmailMarketing";
import { MyBlogs } from "./pages/marketing/Blogs/MyBlogs";
import { PenAndNotebook } from "./pages/marketing/MarketingMaterial/PenAndNotebook";
import { TShirts } from "./pages/marketing/MarketingMaterial/TShirts";
import { Mugs } from "./pages/marketing/MarketingMaterial/Mugs";
import { KeyChain } from "./pages/marketing/MarketingMaterial/KeyChain";
import { MarketingBlogs } from "./pages/marketing/Blogs/MarketingBlogs";
import { MarketingMaterial } from "./pages/marketing/MarketingMaterial/MarketingMaterial";
import { GiftCards } from "./pages/marketing/MarketingMaterial/GiftCards";
import { Stickers } from "./pages/marketing/MarketingMaterial/Stickers";
import { ToteBags } from "./pages/marketing/MarketingMaterial/ToteBags";
import { BusinessCard } from "./pages/marketing/BusinessCard/BusinessCard";
import { MarketingEvents } from "./pages/marketing/MarketingEvents/MarketingEvents";
import { NewEvent } from "./pages/marketing/MarketingEvents/NewEvent";
import { MyEvent } from "./pages/marketing/MarketingEvents/MyEvents";
import { EventSchedule } from "./pages/marketing/MarketingEvents/EventSchedule";
import { OnlineCampaigns } from "./pages/marketing/OnlineCampaigns/OnlineCampaigns";
import { Billboards } from "./pages/marketing/Billboards/Billboards";
import { LegalContact } from "./pages/Legal/LegalContact";
import { Email } from "./pages/Legal/Email";
import { Location } from "./pages/Legal/Location";
import { Letterhead } from "./pages/Legal/Letterhead";
import { RegistrationCertificate } from "./pages/Legal/RegistrationCertificate";
import { BrandRegistration } from "./pages/Legal/BrandRegistration";
import { AdditionalCertificates } from "./pages/Legal/AdditionalCertificates";
import { LegalConsultation } from "./pages/Legal/LegalConsultation";
import { MyTeam } from "./pages/Team/MyTeam";
import { TeamLegal } from "./pages/Team/Legal";
import { TeamPlatforms } from "./pages/Team/Platforms";
import { TeamMeeting } from "./pages/Team/Meeting";
import { ToolWebsite } from "./pages/BusinessTools/ToolWebsite";
import { ToolApp } from "./pages/BusinessTools/ToolApp";
import { ToolCRM } from "./pages/BusinessTools/ToolCRM";
import { ToolEquipment } from "./pages/BusinessTools/ToolEquipment";
import { ToolTemplates } from "./pages/BusinessTools/ToolTemplates";
import { ToolInvoicing } from "./pages/BusinessTools/ToolInvoicing";
import { ToolPlatforms } from "./pages/BusinessTools/ToolPlatforms";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WizardResult from "./pages/Home/WizardResult";

export default function App() {
  const ref = useRef(null);
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <>
      <AuthProvider>
        <IdeaProvider>
          {/* {!isLoggedIn ? <MainNavBar /> : <Navbar />} */}
          <MainNavBar />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/plan-details" element={<PlanDetails />} />
            <Route index path="/wizard-result" element={<WizardResult />} />
            <Route
              index
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Overview />
                </PrivateRoute>
              }
            />
            <Route index path="/mainWizard" element={<Wizard />} />
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
              element={
                <PrivateRoute>
                  <IdeaEdit />
                </PrivateRoute>
              }
            />
            <Route
              path="/idea/plan/view/:id"
              element={
                <PrivateRoute>
                  <IdeaPlanViewer />
                </PrivateRoute>
              }
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
            <Route
              path="/marketing/social-media/home"
              element={
                <PrivateRoute>
                  <SocialMidea />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/social-media/my-design"
              element={
                <PrivateRoute>
                  <MyDesign />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/social-media/new-design"
              element={
                <PrivateRoute>
                  <NewDesign />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/email-marketing"
              element={
                <PrivateRoute>
                  <EmailMarketing />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/seo"
              element={
                <PrivateRoute>
                  <SEO />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/blogs/home"
              element={
                <PrivateRoute>
                  <MarketingBlogs />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/blogs/create-new-blog"
              element={
                <PrivateRoute>
                  <CreateNewBlog />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/blogs/my-blogs"
              element={
                <PrivateRoute>
                  <MyBlogs />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/marketing-material/pen-and-notebook"
              element={
                <PrivateRoute>
                  <PenAndNotebook />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/marketing-material/home"
              element={
                <PrivateRoute>
                  <MarketingMaterial />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/marketing-material/t-shirts"
              element={
                <PrivateRoute>
                  <TShirts />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/marketing-material/mugs"
              element={
                <PrivateRoute>
                  <Mugs />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/marketing-material/key-chain"
              element={
                <PrivateRoute>
                  <KeyChain />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/marketing-material/gift-cards"
              element={
                <PrivateRoute>
                  <GiftCards />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/marketing-material/stickers"
              element={
                <PrivateRoute>
                  <Stickers />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/marketing-material/tote-bags"
              element={
                <PrivateRoute>
                  <ToteBags />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/business-card"
              element={
                <PrivateRoute>
                  <BusinessCard />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/events/home"
              element={
                <PrivateRoute>
                  <MarketingEvents />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/events/new-event"
              element={
                <PrivateRoute>
                  <NewEvent />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/events/event-schedule"
              element={
                <PrivateRoute>
                  <EventSchedule />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/events/my-event"
              element={
                <PrivateRoute>
                  <MyEvent />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/billboards/home"
              element={
                <PrivateRoute>
                  <Billboards />
                </PrivateRoute>
              }
            />
            <Route
              path="/marketing/online-campaigns/home"
              element={
                <PrivateRoute>
                  <OnlineCampaigns />
                </PrivateRoute>
              }
            />
            {/* ------------legal */}
            <Route
              path="/legal/contact"
              element={
                <PrivateRoute>
                  <LegalContact />
                </PrivateRoute>
              }
            />
            <Route
              path="/legal/email"
              element={
                <PrivateRoute>
                  <Email />
                </PrivateRoute>
              }
            />
            <Route
              path="/legal/location"
              element={
                <PrivateRoute>
                  <Location />
                </PrivateRoute>
              }
            />
            <Route
              path="/legal/letterhead"
              element={
                <PrivateRoute>
                  <Letterhead />
                </PrivateRoute>
              }
            />
            <Route
              path="/legal/rc"
              element={
                <PrivateRoute>
                  <RegistrationCertificate />
                </PrivateRoute>
              }
            />
            <Route
              path="/legal/brand-registration"
              element={
                <PrivateRoute>
                  <BrandRegistration />
                </PrivateRoute>
              }
            />
            <Route
              path="/legal/additional-certificates"
              element={
                <PrivateRoute>
                  <AdditionalCertificates />
                </PrivateRoute>
              }
            />
            <Route
              path="/legal/legal-consultation"
              element={
                <PrivateRoute>
                  <LegalConsultation />
                </PrivateRoute> 
              }
            />
{/* --------------------------------------Team */}
            <Route
              path="/business-tools/website"
              element={
                <PrivateRoute>
                  <ToolWebsite />
                </PrivateRoute>
              }
            />
            <Route
              path="/business-tools/App"
              element={
                <PrivateRoute>
                  <ToolApp />
                </PrivateRoute>
              }
            />
            <Route
              path="/business-tools/CRM"
              element={
                <PrivateRoute>
                  <ToolCRM />
                </PrivateRoute>
              }
            />
            <Route
              path="/business-tools/equipment"
              element={
                <PrivateRoute>
                  <ToolEquipment />
                </PrivateRoute> 
              }
            />
            <Route
              path="/business-tools/templates"
              element={
                <PrivateRoute>
                  <ToolTemplates />
                </PrivateRoute>
              }
            />
            <Route
              path="/business-tools/platforms"
              element={
                <PrivateRoute>
                  <ToolPlatforms />
                </PrivateRoute>
              }
            />
            <Route
              path="/business-tools/invoicing"
              element={
                <PrivateRoute>
                  <ToolInvoicing />
                </PrivateRoute> 
              }
            />

            {/* --------------------Business Tools------------------- */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </IdeaProvider>
      </AuthProvider>
    </>
  );
}
