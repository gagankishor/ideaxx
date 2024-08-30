import React, { useState } from "react";
import axios from "axios";
import { RxReload } from "react-icons/rx";
import { userToken } from "../../../config/Auth";
import { RestAPI } from "../../../config/Api";

const SuggestionInput = ({ endpoint, name, sectorId, serviceName,ideaDescription,clients }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState(localStorage.getItem(name) || "");
  const [isLoading, setIsLoading] = useState(false);

  const fetchSuggestions = () => {
    setIsLoading(true);
    let requestBody = {
      sector_id: sectorId,
      ...(serviceName && { name: serviceName }),
    };
    const service = localStorage.getItem(serviceName)

    // const idea_description = localStorage.getItem('idea_description')
    const idea_description = ideaDescription
    // console.log(idea_description,"***---------------",clients)
    if (serviceName != ""){

      requestBody = {
        sector_id: sectorId,
        // Include serviceName if it's needed for fetching suggestions
        // ...(serviceName && { name: serviceName }),
        serviceName:service,
        idea_description,
        clients
        
      };
    }else{

      requestBody = {
        sector_id: sectorId,
        // Include serviceName if it's needed for fetching suggestions
        ...(serviceName && { name: serviceName }),
        idea_description,
        clients:localStorage.getItem('clients')
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

  // This function handles updating the input value and storing it in localStorage
  const handleChange = (e) => {
    // console.log(name,newValue,"+++++++++++++++++++++++++++++++++-------------")
    const newValue = e.target.value;
    setInputValue(newValue);
    localStorage.setItem(name, newValue);
  };
  // console.log(localStorage.getItem('clients'))

  // This function handles suggestion selection
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

export default SuggestionInput;
