import React, { useContext, useState } from 'react';
import axios from 'axios';

export const BusinessSaveButton = ({ slogan, buttonText = "Save This", onSuccess, onError }) => {
  const loggedToken = userToken(); 
  const { ideaData, brandData, setBrandDataMain } = useContext(IdeaContext);
  const [isLoading, setIsLoading] = useState(false);

  const axiosConfig = {
    headers: {  
      "Content-Type": "application/json",
      Authorization: `Bearer ${loggedToken}`,
    },
  };

  const handleSave = async (payload) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${RestAPI}/bi/save-brand`, payload, axiosConfig);
      
      if (response.data && response.data.data) {
        console.log("Brand saved:", response.data);
        if (onSuccess) onSuccess(response.data.data); 
      } else {
        console.error("Unexpected data format:", response.data);
        if (onError) onError("Unexpected data format"); 
      }
    } catch (error) {
      console.error("Error saving data:", error);
      if (onError) onError("Error saving data"); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      type="button"
      className="btn"
      onClick={(e) => {
        e.stopPropagation();
        // Prevent double clicking while loading
        const payload = {
            idea_id: ideaData?.id || '',
            [dynamicKey]: dynamicValue // Set dynamic key-value pair
          };
          
          // Prevent multiple clicks while loading
          if (!isLoading) {
            handleSave(payload);
          }
      }}
      disabled={isLoading} // Disable button while loading
    >
      {isLoading ? 'Saving...' : buttonText} {/* Change button text during loading */}
    </button>
  );
};
