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

export default function Layout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <main>
            <AuthProvider>
                <MainNavBar />
                {children}
                <Footer />
            </AuthProvider>
          </main>
        </body>
      </html>
    </>
  );
}

// Add prop types validation
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
