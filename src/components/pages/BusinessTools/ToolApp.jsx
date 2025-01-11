import { Pletforms } from "@/components/components/Pletforms";
import { FaTools } from "react-icons/fa";

export const ToolApp = () => {
  const platforms = [
    { id: 1, name: "wordpress", logo: "/WordPress.png", link: "https://wordpress.com/" },
    { id: 2, name: "shopify", logo: "/platforms/shopify.png", link: "https://www.shopify.com/" },
    { id: 3, name: "Wix", logo: "/Wix.png", link: "www.wix.com" },
    { id: 4, name: "Weebly", logo: "/pngegg.png", link: "https://www.weebly.com/" },
  ];
  return (
    <>
      <div className="dashboard container">
        <div className="content">
          <h1 id="heading">
            <FaTools /> Business Tools
          </h1>
          <form action="" className="form">
            <div className="row">
              <div
                className="card-globle"
                style={{
                  justifyContent: "center",
                  width: "120px",
                  height: "200px",
                }}
              >
                No App yet
              </div>
              <div className="col">
                <textarea
                  name=""
                  placeholder="App details ......"
                  id=""
                  style={{
                    justifyContent: "center",
                    width: "400px",
                    height: "200px",
                  }}
                ></textarea>
              </div>
            </div>
            <Pletforms platforms={platforms} title="Platforms" />
          </form>
        </div>
      </div>
    </>
  );
};
