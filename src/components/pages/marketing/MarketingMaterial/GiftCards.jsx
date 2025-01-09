import { PletformsNew } from "@/components/components/PletformsNew";
import { RiSeoLine } from "react-icons/ri";
export const GiftCards = () => {
  const platforms = [
    { id: 1, name: "", logo: "/GiftCards.png", link: "#" },
    { id: 2, name: "", logo: "/GiftCards.png", link: "#" },
    { id: 3, name: "", logo: "/GiftCards.png", link: "#" },
    { id: 4, name: "", logo: "/GiftCards.png", link: "#" },
    { id: 5, name: "", logo: "/GiftCards.png", link: "#" },
    { id: 6, name: "", logo: "/GiftCards.png", link: "#" },
    { id: 7, name: "", logo: "/GiftCards.png", link: "#" },
    { id: 8, name: "", logo: "/GiftCards.png", link: "#" },
  ];
  return (
    <>
      <div className="dashboard container">
        <div className="content">
          <h1 id="heading">
            <RiSeoLine />
            Marketing Material
          </h1>
          <div className="form">
            <PletformsNew platforms={platforms} title="Gift Cards" />
          </div>
        </div>
      </div>
    </>
  );
};