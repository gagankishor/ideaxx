import { Blogs } from "@/components/components/Blogs";
import { EnterpriseLaunch } from "@/components/components/EnterpriseLaunch";
import { RiSeoLine } from "react-icons/ri";
export const BrandRegistration = () => {
  const blogs = [
    {
      id: 1,
      name: "Blog",
      logo: "blog.webp",
      link: "#",
    },
    {
      id: 2,
      name: "Blog",
      logo: "blog.webp",
      link: "#",
    },
    {
      id: 3,
      name: "Blog",
      logo: "blog.webp",
      link: "#",
    },
    {
      id: 4,
      name: "Blog",
      logo: "blog.webp",
      link: "#",
    },
  ];
  return (
    <>
      <div className="dashboard container">
        <div className="content">
          <h1 id="heading">
            <RiSeoLine />
            Contact information
          </h1>
          <form className="form">
            <Blogs blogs={blogs} title="Blogs" />
            <div
              className="row"
              style={{
                justifyContent: "center",
                alignItems: "center",
                margin: "60px 0px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                Apply for trademark registration
                <button
                  style={{ margin: "auto" }}
                  type="button"
                  className="btn"
                >
                  Apply
                </button>
              </div>
            </div>
            <EnterpriseLaunch />
          </form>
        </div>
      </div>
    </>
  );
};
