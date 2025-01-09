
import { Pletforms } from "@/components/components/Pletforms";
import { RiSeoLine } from "react-icons/ri";
export const KeyChain = () => {
  const platforms = [
    { id: 1, name: "", logo: "/keyChain.png", link: "" },
    { id: 2, name: "", logo: "/keyChain.png", link: "#" },
    { id: 3, name: "", logo: "/keyChain.png", link: "#" },
    { id: 4, name: "", logo: "/keyChain.png", link: "#" },
    { id: 5, name: "", logo: "/keyChain.png", link: "" },
    { id: 6, name: "", logo: "/keyChain.png", link: "#" },
    { id: 7, name: "", logo: "/keyChain.png", link: "#" },
    { id: 8, name: "", logo: "/keyChain.png", link: "#" },
  ];
  return (
    <>
     
      <div className="dashboard container">
        <div className="content">
          <h1 id="heading">
            <RiSeoLine />
            KeyChain
          </h1>
          <div className="form">
            <Pletforms platforms={platforms} title="Key Chain" />
          </div>
        </div>
      </div>
    </>
  );
};
