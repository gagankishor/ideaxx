"use client"
import { FaSearch, FaRobot } from "react-icons/fa";
import { HoverNote } from "../../components/HoverNote";
import { CustomCheckbox } from "../../components/Checkbox";
import { useEffect, useState } from "react";
import axios from "axios"; // Ensure you have axios installed
import { RestAPI } from "@/config/Api";
import { userToken } from "@/config/Auth";
import useAxiosWithAuth from "@/config/useAxiosWithAuth";

export default function IdeaFind() {
  const loggedToken = userToken();
  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem("formData");
    return savedFormData
      ? JSON.parse(savedFormData)
      : {
          sector_id: "",
          logistics: "",
          idea_result: "",
        };
  });
  const [isFetching, setIsFetching] = useState(false);
  const [sectors, setSectors] = useState([]);
  const axiosInstance = useAxiosWithAuth();
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);
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
  const handleCheckboxChange = (fieldName, newValue) => {
    setFormData((prevState) => ({ ...prevState, [fieldName]: newValue }));
  };
  const getIdea = async () => {
    setIsFetching(true);
    const payload = {
      sector_id: formData.sector_id,
      logistics: formData.logistics,
    };
    try {
      const response = await axios.post(
        `${RestAPI}/ai/find-idea`, 
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${loggedToken}`, // Ensure loggedToken is correctly retrieved
          },
        }
      );
      setFormData((prevState) => ({
        ...prevState,
        idea_result: response.data.ai,
      }));
      // setShowTextArea(true);
      // console.log(response);
    } catch (error) {
      console.error("Error fetching idea:", error);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <>
      

      <div className="dashboard container">
        <div className="content">
          <h1 id="heading">
            <FaSearch /> Find Idea
          </h1>
          <form className="form">
            <div className="form-group">
              <label htmlFor="sector_id">
                <div className="left-label">
                  Choose a sector you are intrested in
                  <HoverNote text="Identify key market needs and ensure your product or service addresses them effectively. Foster a customer-centric approach, prioritizing satisfaction and building lasting relationships. Continuously innovate and adapt to industry trends, staying agile and ahead of the competition to drive the success of your business." />
                </div>
              </label>
              <select
                name="sector_id"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    sector_id: e.target.value,
                  })
                }
                value={formData.sector_id}
              >
                <option value="">- Select sector -</option>
                        {sectors.map((sector) => (
                          <option key={sector.id} value={sector.id}>
                            {sector.name}
                          </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <div className="paragraph-heading">
                <label>
                  <div className="left-label">
                    How to get your product or service
                  </div>
                </label>
              </div>
              <CustomCheckbox
                type="radio"
                label="Online"
                name="logistics"
                checked={formData.logistics === "Online"}
                onChange={() => handleCheckboxChange("logistics", "Online")}
              />
              <CustomCheckbox
                type="radio"
                label="Physical location"
                name="logistics"
                checked={formData.logistics === "Physical location"}
                onChange={() =>
                  handleCheckboxChange("logistics", "Physical location")
                }
              />
              <CustomCheckbox
                type="radio"
                label="Both online and physical location"
                name="logistics"
                checked={
                  formData.logistics === "Both online and physical location"
                }
                onChange={() =>
                  handleCheckboxChange(
                    "logistics",
                    "Both online and physical location"
                  )
                }
              />
            </div>

            <div className="form-group">
              <div className="label-flex">
                <div className="left-label">AI Idea Result</div>
                <div className="right-label">
                  <button type="button" className="btn" onClick={getIdea}>
                    {isFetching ? (
                      <div className="spinner"></div>
                    ) : (
                      <>
                        Find Idea <FaRobot />
                      </>
                    )}
                  </button>
                </div>
              </div>
              {formData.idea_result && (
                <textarea
                  name="idea_description"
                  placeholder="Enter.."
                  rows="5"
                  readOnly
                  value={formData.idea_result}
                ></textarea>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
