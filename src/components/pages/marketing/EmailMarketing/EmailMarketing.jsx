 
import { Blogs } from "../../../components/Blogs";
import { Pletforms } from "../../../components/Pletforms";
import { SideBar } from "../../../components/Sidebar";
import { Helmet } from "react-helmet";
import { EnterpriseLaunch } from "../../../components/EnterpriseLaunch";
import { SiMinutemailer } from "react-icons/si";

export const EmailMarketing = () => {
  const blogs = [
    { id: 1, name: "Blog", logo: "/blog.webp", link: "#" },
    { id: 2, name: "Blog", logo: "/blog.webp", link: "#" },
    { id: 3, name: "Blog", logo: "/blog.webp", link: "#" },
    { id: 4, name: "Blog", logo: "/blog.webp", link: "#" },
  ];
  const platforms = [
    { id: 1, name: "Mailchimp", logo: "/mailchimp.png", link: "https://mailchimp.com/" },
    { id: 2, name: "Getresponse", logo: "/getresponse.png", link: "https://www.getresponse.com/" },
    { id: 3, name: "Aweber", logo: "/aweber.png", link: "https://www.aweber.com/" },
    { id: 4, name: "Mailerlite", logo: "/mailerlite.png", link: "#" },
  ];
  return (
    <>
      <Helmet>
        <title>Email Marketing | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
          <SiMinutemailer />

            Email Marketing
          </h1>
          <div className="form">

            <Pletforms platforms={platforms} title="Platforms" />
            <Blogs blogs={blogs} title="Blogs" />
            <EnterpriseLaunch/>
          </div>
          
        </div>
      </div>
    </>
  );
};
