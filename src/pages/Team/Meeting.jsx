import React from "react";
import { Helmet } from "react-helmet";
import { SideBar } from "../../components/Sidebar";

import { RiSeoLine } from "react-icons/ri";

export const TeamMeeting = () => {
  const platforms = [
    {
      id: 1,
      name: "Support",
      logo: "/penAndBook.png",
      link: "https://canva.com/",
    },
    { id: 2, name: "Marketing", logo: "/penAndBook.png", link: "#" },
    { id: 3, name: "Sales", logo: "/penAndBook.png", link: "#" },
    { id: 4, name: "IT", logo: "/penAndBook.png", link: "#" },
    {
      id: 5,
      name: "Account",
      logo: "/penAndBook.png",
      link: "https://canva.com/",
    },
    { id: 6, name: "HR", logo: "/penAndBook.png", link: "#" },
  ];
  return (
    <>
      <Helmet>
        <title> Team | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
            <RiSeoLine />
            Team
          </h1>
          <form className="form">
            <h2 id="section-heading">
              Choose department you want to set a meeting with
            </h2>
            <div className="slider" style={{ gap: "20px" }}>
              {platforms.map((item) => {
                return (
                  <div className="card">
                    <div
                      key={item.id}
                      className="item"
                      style={{
                        borderRadius: "30px",
                        backgroundColor: "white",
                        boxShadow: " 0px 4px 4px rgba(29, 140, 242, 0.08)",
                      }}
                    >
                      <p>{item.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ margin: "60px 0px" }}>
              <label htmlFor="">Describe meeting agenda</label>
              <input type="text" placeholder="agenda" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
