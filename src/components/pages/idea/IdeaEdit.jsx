"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { RestAPI } from "@/config/Api";
import { userToken } from "@/config/Auth";
import { FaStore } from "react-icons/fa";
import useAxiosWithAuth from "@/config/useAxiosWithAuth";

export default function IdeaEdit() {
  const router = useRouter();
  const { id } = router.query;
  const navigate = router.push;
  const token = userToken();
  
  const [idea, setIdea] = useState({
    idea_name: '',
    sector_id: '',
    idea_plan: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sectors, setSectors] = useState([]);
  const axiosInstance = useAxiosWithAuth();
  // const [ideadata, setIdeadata ]= useState('')
  useEffect(() => {
    const fetchIdea = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${RestAPI}/idea/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.data) {
          setIdea(response.data);
          // let  resideadata = await axios.get(idea.idea_plan)
          // setIdeadata(resideadata.data)
        } else {
          console.error("Unexpected data format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching idea:", error);
        setError("Error fetching idea");
      } finally {
        setLoading(false);
      }
    };

    fetchIdea();
  }, [id, token]);
  useEffect(() => {
    const fetchSectors = async () => {
      try {
        const response = await axiosInstance.get(`${RestAPI}/sectors`);
        // console.log('API Response:', response.data); 
        setSectors(response.data); // Adjust based on the actual response structure
      } catch (error) {
        console.error('Error fetching sectors:', error);
      }
    };
  
    fetchSectors();
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIdea({ ...idea, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`${RestAPI}/idea/${id}`, idea, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      navigate('/my-ideas');
    } catch (error) {
      console.error("Error updating idea:", error);
      setError("Error updating idea");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
     
      <div className="dashboard container">
        <div className="content">
          <h1 id="heading">
            <FaStore /> My Ideas
          </h1>
      <div className="edit-idea container">
        <h1>Edit Idea</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="idea_name">Idea Name</label>
              <input
                type="text"
                id="idea_name"
                name="idea_name"
                value={idea.idea_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
            <select
                name="sector_id"
                onChange={handleChange
                }
                value={idea.sector_id}
              >
                <option value="">- Select sector -</option>
                        {sectors.map((sector) => (
                          <option key={sector.id} value={sector.id}>
                            {sector.name}
                          </option>
                ))}
              </select>
              <label htmlFor="sector_id">Sector ID</label>
              {/* <input
                type="text"
                id="sector_id"
                name="sector_id"
                value={idea.sector_id}
                onChange={handleChange}
                required
              /> */}
            </div>
            {/* <div className="form-group">
              <label htmlFor="idea_plan">Idea Plan</label>
              <textarea
                id="idea_plan"
                name="idea_plan"
                value={ideadata}
                onChange={handleChange}
                rows="10"
                required
              />
            </div> */}
            <button type="submit" disabled={loading} className="btn">
              {loading ? "Updating..." : "Update Idea"}
            </button>
          </form>
        )}
      </div>
      </div>
      </div>
    </>
  );
}
