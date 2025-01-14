"use client";
import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { RestAPI } from "@/config/Api";
import PropTypes from "prop-types";

export const IdeaContext = createContext();

export const IdeaProvider = ({ children }) => {
  const [ideaData, setIdeaData] = useState(null);
  const [brandData, setBrandData] = useState(null);

  const setBrandDataMain = (data) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("brandData", JSON.stringify(data));
      setBrandData(data);
    }
  };
  const getLastIdea = async () => {
    try {
      const response = await axios({
        method: "post",
        url: `${RestAPI}/idea/last-idea`,
        headers: {
          Accept: "application/vnd.api+json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200 && response.data.last_idea) {
        const lastIdea = response.data.last_idea;
        setIdeaData(lastIdea);

        if (lastIdea?.brand) {
          setBrandDataMain(lastIdea?.brand);
        }

        localStorage.setItem("idea", JSON.stringify(lastIdea));
      }
    } catch (error) {
      console.error("There was an error fetching the last idea:", error);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedIdeaData = localStorage.getItem("idea");
      if (storedIdeaData && storedIdeaData !== "undefined") {
        try {
          const parsedData = JSON.parse(storedIdeaData);
          setIdeaData(parsedData);
          setBrandDataMain(parsedData?.brand);
        } catch (error) {
          console.error("Error parsing stored idea data:", error);
        }
      } else {
        getLastIdea();
      }

      const storedBrandData = localStorage.getItem("brandData");
      if (storedBrandData) {
        setBrandData(JSON.parse(storedBrandData));
      }
    }
  }, []);

  return (
    <IdeaContext.Provider value={{ ideaData, getLastIdea, brandData, setBrandDataMain }}>
      {children}
    </IdeaContext.Provider>
  );
};

IdeaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
