import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { SideBar } from "../../../components/Sidebar";
import { TbSearch, TbSocial } from "react-icons/tb";
import { Blogs } from "../../../components/Blogs";
import { Pletforms } from "../../../components/Pletforms";
import { EnterpriseLaunch } from "../../../components/EnterpriseLaunch";
import { RiSeoLine } from "react-icons/ri";
import { RestAPI } from "../../../config/Api";
import axios from "axios";

export const MyEvent = () => {
  const blogs = [
    { id: 1, name: "Blog", logo: "/blog.webp", link: "#" },
    { id: 2, name: "Blog", logo: "/blog.webp", link: "#" },
    { id: 3, name: "Blog", logo: "/blog.webp", link: "#" },
    { id: 4, name: "Blog", logo: "/blog.webp", link: "#" },
  ];
  const platforms = [
    {
      id: 1,
      name: "Product Sampling",
      logo: "/ahrefs.png",
      link: "https://ahrefs.com/",
    },
    {
      id: 2,
      name: "Exhibition",
      logo: "/semrush.png",
      link: "https://www.semrush.com/",
    },
    {
      id: 3,
      name: "Webinar",
      logo: "/keyword-tool-logo.webp",
      link: "https://keywordtool.io/",
    },
  ];
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventDesigns = async () => {
      try {
        const response = await axios.get(`${RestAPI}/event-designs`); // Adjust the API URL if needed
        setEvents(response.data.data); // Assuming the data is in `response.data.data`
        setLoading(false);
      } catch (err) {
        console.error("Error fetching event designs:", err);
        setError("Failed to load event schedule.");
        setLoading(false);
      }
    };

    fetchEventDesigns();
  }, []);
  return (
    <>
      <Helmet>
        <title>SEO | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
            <RiSeoLine />
            Marketing Events
          </h1>
          <div className="form">
            <h2 id="section-heading" style={{ marginTop: "40px" }}>
              My Events
            </h2>
            <div className="slider" style={{ gap: "20px" }}>
              {events.map((event) => {
                return (
                  <div className="card">
                    <a
                      key={event.id}
                      href={event.link}
                      target="_blank"
                      className="item"
                    >
                      <p>{event.purposeAndGoals || event.selectedEvent}</p>
                    </a>
                  </div>
                );
              })}
            </div>
            {/* <Pletforms platforms={platforms} title="My Events" /> */}
          </div>
        </div>
      </div>
    </>
  );
};
