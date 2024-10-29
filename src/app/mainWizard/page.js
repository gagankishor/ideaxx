// src/app/mainWizard/page.js

import Wizard from '@/components/pages/Home/Wizard';
export const metadata = {
  title: "Startup Business Idea Checker Online - Ideax",
  description: "Best AI based Startup Business Idea Checker Online free tool. Verify your business ideas and get valuable insights. Test business idea now.",
  keywords: "Business Idea Checker, Startup Idea Checker, Business idea checker online, Startup business idea checker, Business idea checker free",
  icons: {
    icon: "/idea.svg", // Path to your favicon in the public folder
  },
  openGraph: {
    title: "Startup Business Idea Checker Online - Ideax",
    description: "Best AI based Startup Business Idea Checker Online free tool. Verify your business ideas and get valuable insights. Test business idea now.",
    images: ["/logo.png"], // Update with the correct path to your logo image
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Business Idea Checker Online - Ideax",
    description: "Best AI based Startup Business Idea Checker Online free tool. Verify your business ideas and get valuable insights. Test business idea now.",
    images: ["/logo.png"], // Update with the correct path
  }
};
const MainWizard = () => {
  return <Wizard />;
};

export default MainWizard;
