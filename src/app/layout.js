import PropTypes from 'prop-types';
import { AuthProvider } from "@/context/AuthContext";
import { MainNavBar } from "@/components/pages/Home/components/MainNavBar";
import "../css/App.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "React App",
  description: "Web site created with Next.js.",
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
