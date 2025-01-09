import React, { useState } from "react";
import axios from "axios";
import { userToken } from "@/config/Auth";
import { RxReload } from "react-icons/rx";
import { RestAPI } from "@/config/Api";
import { FaPlus } from "react-icons/fa";

const SuggestionInvestment = () => {
  const [rows, setRows] = useState([
    { text: "real estate", number: "", suggestions: [] },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasFocused, setHasFocused] = useState(false); // Tracks if any input has been focused

  const fetchSuggestions = (index, fetchOnFocus = false) => {
    setIsLoading(true);
    setHasFocused(true);

    const requestBody = {
      item: fetchOnFocus ? "real estate" : rows[index].text,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${userToken()}`,
      },
    };

    axios
      .post(`${RestAPI}/ai/investment-item`, requestBody, config)
      .then((response) => {
        const newRows = [...rows];
        // Instead of replacing text, we're now updating suggestions for the row
        newRows[index].suggestions = response.data.ai; // Assuming response.data.ai contains an array of suggestions
        setRows(newRows);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching suggestions:", error);
        setIsLoading(false);
      });
  };

  const handleInputChange = (index, type, value) => {
    const newRows = [...rows];
    if (type === "text") {
      newRows[index].text = value;
    } else {
      newRows[index].number = value;
    }
    setRows(newRows);
  };

  const handleInputFocus = (index) => {
    fetchSuggestions(index, true);
  };

  const handleSuggestionClick = (index, suggestion) => {
    const newRows = [...rows];
    newRows[index].text = suggestion; // Update the text of the row with the clicked suggestion
    newRows[index].suggestions = []; // Clear suggestions after selection
    setRows(newRows);
  };

  const addRow = () => {
    setRows([...rows, { text: "Real Estate", number: "", suggestions: [] }]);
  };

  return (
    <>
      {rows.map((row, index) => (
        <React.Fragment key={index}>
          <div className="flex">
            <input
              type="text"
              value={row.text}
              onChange={(e) => handleInputChange(index, "text", e.target.value)}
              onFocus={() => handleInputFocus(index)}
              name={`text-${index}`}
              placeholder="Type here..."
            />

            <input
              type="number"
              value={row.number}
              min="0"
              onChange={(e) =>
                handleInputChange(index, "number", e.target.value)
              }
              name={`number-${index}`}
              placeholder="Type here..."
            />
          </div>
          <div className="suggestion">
            {row.suggestions.map((suggestion, sIndex) => (
              <button
                type="button"
                key={sIndex}
                onClick={() => handleSuggestionClick(index, suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>

          {isLoading && <div className="spinner"></div>}

          {hasFocused && (
            <div className="btn-container">
              <button type="button" className="btn" onClick={() => fetchSuggestions(index)}>
                Regenerate Suggestions <RxReload />
              </button>
            </div>
          )}
        </React.Fragment>
      ))}

      <div className="btn-container">
        <button type="button" className="btn" onClick={addRow}>
          Add More Rows <FaPlus />
        </button>
      </div>
    </>
  );
};

export default SuggestionInvestment;
