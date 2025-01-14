import PropTypes from 'prop-types';
import { AuthProvider } from "@/context/AuthContext";
import { MainNavBar } from "@/components/pages/Home/components/MainNavBar";
import "../css/App.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "IDX on Solana - IDX Token - Enterprise Crypto Blockchain Solution",
  description: "IDX on Solana is the top crypto token of 2025 with highest growth potential. Buy IDX token today. Best Enterprises Blockchain Solution.",
  keywords: "IDX on Solana, IDX Token, IDX Crypto, Solana IDX Token, IDX Token price, IDX Token Purchase",
  icons: {
    icon: "/favicon.ico", 
    apple: "/apple-touch-icon.png", 
  },
  openGraph: {
    title: "IDX on Solana - IDX Token - Enterprise Crypto Blockchain Solution",
    description: "IDX on Solana is the top crypto token of 2025 with highest growth potential. Buy IDX token today. Best Enterprises Blockchain Solution.",
    images: ["/logo.png"], 
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IDX on Solana - IDX Token - Enterprise Crypto Blockchain Solution",
    description: "IDX on Solana is the top crypto token of 2025 with highest growth potential. Buy IDX token today. Best Enterprises Blockchain Solution.",
    images: ["/logo.png"],
  },
  metadataBase: new URL("https://idxsolana.io"), // Replace with your production URL
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