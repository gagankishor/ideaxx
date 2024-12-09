import { useEffect, useState } from "react";
import axios from "axios";
import { FaStore } from "react-icons/fa";
import { SideBar } from "../../components/Sidebar";
import { DataTable } from "./components/DataTable";
import { RestAPI } from "../../config/Api";
import { userToken } from "../../config/Auth";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function IdeaMy() {
  const token = userToken();
  // State for storing fetched data
  const [data, setData] = useState([]);
  // State for managing loading status
  const [isLoading, setIsLoading] = useState(true);
  // State for handling errors
  const [error, setError] = useState(null);
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true before starting fetch
      try {
        const response = await axios.get(`${RestAPI}/idea/get-ideas`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Check if response.data.user_ideas exists
        if (response.data && response.data.user_ideas) {
          setData(response.data.user_ideas);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      } finally {
        setIsLoading(false); // Set loading to false once fetch is complete
      }
    };

    fetchData();
  }, [token]); // Added token as a dependency to refetch if it changes

  return (
    <>
      <Helmet>
        <title>My Ideas | ideax</title>
      </Helmet>

      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
            <FaStore /> My Ideas
          </h1>
          <div className="form">
            {isLoading ? (
              <>
                <div className="generated">
                  <div className="spinner"></div> {/* Spinner for loading indicator */}
                </div>
              </>
            ) : error ? (
              <p>Error: {error}</p> // Display an error message if there's an error
            ) : data.length > 0 ? (
              <DataTable data={data} />
            ) : (
              <DataTable
                data={data}
                note={
                  <p id="nothing">
                    You don&rsquo;t have any ideas yet,{" "}
                    <Link to="/idea/new">Make one!</Link>
                  </p>
                }
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
