"use client";
import PropTypes from "prop-types"; // Import PropTypes
import { useState } from "react";
import axios from "axios";
import { RxReload } from "react-icons/rx";
import { userToken } from "@/config/Auth";
import { RestAPI } from "@/config/Api";

const SuggestionInput = ({ endpoint, name, sectorId, serviceName, ideaDescription, clients }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState(localStorage.getItem(name) || "");
  const [isLoading, setIsLoading] = useState(false);

  const fetchSuggestions = () => {
    setIsLoading(true);
    let requestBody = {
      sector_id: sectorId,
      ...(serviceName && { name: serviceName }),
    };
    const service = localStorage.getItem(serviceName);

    const idea_description = ideaDescription;
    if (serviceName !== "") {
      requestBody = {
        sector_id: sectorId,
        serviceName: service,
        idea_description,
        clients,
      };
    } else {
      requestBody = {
        sector_id: sectorId,
        ...(serviceName && { name: serviceName }),
        idea_description,
        clients: localStorage.getItem("clients"),
      };
    }

    const config = {
      headers: {
        Authorization: `Bearer ${userToken()}`,
      },
    };

    axios
      .post(RestAPI + endpoint, requestBody, config)
      .then((response) => {
        setSuggestions(response.data.ai);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching suggestions:", error);
        setIsLoading(false);
        setSuggestions([]);
      });
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    localStorage.setItem(name, newValue);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    localStorage.setItem(name, suggestion);
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onFocus={fetchSuggestions}
        name={name}
        placeholder="Type here..."
      />
      {isLoading ? (
        <div className="suggestion">
          <div className="spinner"></div>
        </div>
      ) : (
        suggestions.length > 0 && (
          <div className="suggestion">
            {suggestions.map((suggestion, index) => (
              <button
                type="button"
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )
      )}
      <div className="btn-container">
        <button type="button" className="btn" onClick={fetchSuggestions}>
          Regenerate Suggestions <RxReload />
        </button>
      </div>
    </>
  );
};

// Prop Types Validation
SuggestionInput.propTypes = {
  endpoint: PropTypes.string.isRequired, // Required string
  name: PropTypes.string.isRequired, // Required string
  sectorId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // String or number
  serviceName: PropTypes.string, // Optional string
  ideaDescription: PropTypes.string, // Optional string
  clients: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string), // Array of strings
    PropTypes.string, // Or a single string
  ]), // Optional
};

export default SuggestionInput;
