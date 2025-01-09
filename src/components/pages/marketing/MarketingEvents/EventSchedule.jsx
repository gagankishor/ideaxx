"use client";
import { useEffect, useState } from "react";
import { RestAPI } from "@/config/Api";
import { RiSeoLine } from "react-icons/ri";
import axios from "axios";
export const EventSchedule = () => {
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
        console.error('Error fetching event designs:', err);
        setError('Failed to load event schedule.');
        setLoading(false);
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
            Event Schedule
          </h1>
          <div className="form">
            {loading ? (
              <p>Loading event schedule...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <table className="event-schedule-table">
                <thead>
                  <tr>
                    <th>Event Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Venue</th>
                    <th>Speakers</th>
                  </tr>
                </thead>
                <tbody>
                  {events?.length > 0 ? (
                    events.map((event) => (
                      <tr key={event.id}>
                        <td>{event.purposeAndGoals || event.selectedEvent}</td>
                        <td>{new Date(event.eventDate).toLocaleDateString()}</td>
                        <td>{new Date(event.eventDate).toLocaleTimeString()}</td>
                        <td>{event.venue}</td>
                        <td>{event.speakersAndPresenters}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5">No events scheduled</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
