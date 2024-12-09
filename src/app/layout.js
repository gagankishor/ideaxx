import PropTypes from 'prop-types';
import { AuthProvider } from "@/context/AuthContext";
import { MainNavBar } from "@/components/pages/Home/components/MainNavBar";
import "../css/App.css";
import Footer from "@/components/Footer";

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
export default function Layout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <main>
            <AuthProvider>
                <MainNavBar/>
                {children}
                <Footer />
            </AuthProvider>
          </main>
        </body>
      </html>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
