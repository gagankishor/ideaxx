import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { RestAPI } from "./Api";

export const IdeaContext = createContext();

export const IdeaProvider = ({ children }) => {
  const [ideaData, setIdeaData] = useState(null);
  const [brandData, setBrandData] = useState(localStorage.getItem('brandData'));
  const setBrandDataMain = (data) => {
    localStorage.setItem('brandData', data);
    setBrandData(data);
  };
  const getLastIdea = async () => {
    try {
      const response = await axios({
        method: "post",
        url: `${RestAPI}/idea/last-idea`,
        headers: {
          Accept: "application/vnd.api+json",
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200 && response.data.last_idea) {
        const lastIdea = response.data.last_idea;
        setIdeaData(lastIdea);
        if(lastIdea?.brand){

          setBrandDataMain(lastIdea?.brand)
        }

        localStorage.setItem('idea', JSON.stringify(lastIdea));
      }
    } catch (error) {
      console.error("There was an error fetching the last idea:", error);
    }
  };
  
  // useEffect(() => {
  //   // Safely attempt to load ideaData from localStorage on initial render
  //   const storedIdeaData = localStorage.getItem('idea');
  //   getLastIdea();

  //   if (storedIdeaData && storedIdeaData !== "undefined") {
  //       try {
  //           const parsedData = JSON.parse(storedIdeaData);
  //           setIdeaData(parsedData);
  //           console.log(parsedData)
  //           setBrandDataMain(parsedData?.brand)
  //       } catch (error) {
  //           console.error("Error parsing stored idea data:", error);
  //       }
  //   } else {
  //       getLastIdea();
  //   }
  //   console.log(ideaData)
  // }, []);

  return (
    <IdeaContext.Provider value={{ ideaData, getLastIdea ,brandData,setBrandDataMain }}>
      {children}
    </IdeaContext.Provider>
  );
};
