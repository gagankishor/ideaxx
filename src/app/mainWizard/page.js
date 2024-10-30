// src/app/mainWizard/page.js

import Wizard from '@/components/pages/Home/Wizard';
export const metadata = {
  title: "Startup Business Idea Checker Online - Ideax",
  description: "Best AI based Startup Business Idea Checker Online free tool. Verify your business ideas and get valuable insights. Test business idea now.",
  keywords: "Business Idea Checker, Startup Idea Checker, Business idea checker online, Startup business idea checker, Business idea checker free",
  icons: {
    icon: "/favicon.ico", 
    apple: "/apple-touch-icon.png", 
  },
  openGraph: {
    title: "Startup Business Idea Checker Online - Ideax",
    description: "Best AI based Startup Business Idea Checker Online free tool. Verify your business ideas and get valuable insights. Test business idea now.",
    images: ["/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Business Idea Checker Online - Ideax",
    description: "Best AI based Startup Business Idea Checker Online free tool. Verify your business ideas and get valuable insights. Test business idea now.",
    images: ["/logo.png"], 
  }
};
const MainWizard = () => {
  return <Wizard />;
};

export default MainWizard;
