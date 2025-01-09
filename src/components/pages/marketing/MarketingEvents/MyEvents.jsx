import { useEffect, useState } from "react";
import { RestAPI } from "@/config/Api";
import { RiSeoLine } from "react-icons/ri";
import axios from "axios";

export const MyEvent = () => {
 
  const [events, setEvents] = useState([]);
  

  useEffect(() => {
    const fetchEventDesigns = async () => {
      try {
        const response = await axios.get(`${RestAPI}/event-designs`); // Adjust the API URL if needed
        setEvents(response.data.data); // Assuming the data is in `response.data.data`
      } catch (err) {
        console.error("Error fetching event designs:", err);
      }
    };

    fetchEventDesigns();
  }, []);
  return (
    <>
   
      <div className="dashboard container">
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
              {events.map((event,index) => {
                return (
                  <div className="card" key={index}>
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
