import { FaSearch, FaRobot } from "react-icons/fa";
import { SideBar } from "../../components/Sidebar";
import { Helmet } from "react-helmet";
import { HoverNote } from "../../components/HoverNote";
import { CustomCheckbox } from "../../components/Checkbox";
import { useEffect, useState } from "react";
import axios from "axios";
import { RestAPI } from "../../config/Api";
import { userToken } from "../../config/Auth";

export default function IdeaFind() {
  const loggedToken = userToken();
  const [formData, setFormData] = useState(() => {
    // Attempt to load saved formData from localStorage
    const savedFormData = localStorage.getItem("ideaFormData");
    return savedFormData
      ? JSON.parse(savedFormData)
      : {
          sector_id: "",
          logistics: "",
          idea_result: "",
        };
  });

  const [showTextArea, setShowTextArea] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // Save formData to localStorage whenever formData changes
    localStorage.setItem("ideaFormData", JSON.stringify(formData));
  }, [formData]);

  // Handle checkbox change
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
            Authorization: `Bearer ${loggedToken}`,
          },
        }
      );

      // Update formData state with the new idea result
      setFormData((prevState) => ({
        ...prevState,
        idea_result: response.data.ai
      }));
      setShowTextArea(true);
    } catch (error) {
      console.error("Error fetching idea:", error);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Find Idea | ideax</title>
      </Helmet>

      <div className="dashboard container">
        <SideBar />
        <div className="content">
          {/* Your form and handlers remain the same */}
        </div>
      </div>
    </>
  );
}
