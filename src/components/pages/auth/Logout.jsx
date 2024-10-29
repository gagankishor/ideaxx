import { FaArrowAltCircleLeft } from "react-icons/fa";
import { RestAPI } from "../../../config/Api";
import axios from "axios";
import { useState } from "react";

export function LogoutButton() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        `${RestAPI}/auth/Logout`,
        {
          
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setLoading(false);

      if (response.status === 200) {
        localStorage.removeItem("token");
        // window.location.href = "/";
      }
    } catch (error) {
      setLoading(false);
      // console.log(error);
    }
  };

  return (
    <span onClick={handleLogout} style={{ color: "#FF204E" }}>
      <FaArrowAltCircleLeft />
      {!loading ? "Log Out" : <div className="spinner"></div>}
    </span>
  );
}
