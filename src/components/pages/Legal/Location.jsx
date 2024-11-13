import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { SideBar } from "../../components/Sidebar";
import { RiMapPin2Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { Blogs } from "../../components/Blogs";
import { IdeaContext } from "../../config/ideaDataContext";
export const Location = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [loading, setLoading] = useState(false);
  const { ideaData} = useContext(IdeaContext);

  const blogs = [
    { id: 1, name: "Blog", logo: "/blog.webp", link: "#" },
    { id: 2, name: "Blog", logo: "/blog.webp", link: "#" },
    { id: 3, name: "Blog", logo: "/blog.webp", link: "#" },
    { id: 4, name: "Blog", logo: "/blog.webp", link: "#" },
  ];
  const handleGoogleSearch = (e) => {
    e.preventDefault();
    if (country && state && city) {
      const query = `real estate agent in ${city}, ${state}, ${country}`;
      window.open(`https://www.google.com/search?q=${query}`, "_blank");
    } else {
      Swal.fire({
        title: "Error",
        text: "Please fill in the country, state, and city before searching.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (country && state && city && street && postalCode) {
      const data = new FormData();
      data.append("ideaId", ideaData?.id);
      data.append("country", country);
      data.append("state", state);
      data.append("city",city  );
      data.append("street", street );
      data.append("postalCode",  postalCode);
      
      try {
        
        Swal.fire({
          title: "Success",
          text: "Legal information saved successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Error",
          text: "Failed to save legal information.",
          icon: "error",
          confirmButtonText: "OK",
        });
      } finally {
        setLoading(false);
      }
    } else {
      Swal.fire({
        title: "Error",
        text: "Please fill in all the required fields.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
    setLoading(false);

  };
  return (
    <>
      <Helmet>
        <title> Location | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
            <RiMapPin2Line />
            Location
          </h1>
          <form className="form">
            <Blogs blogs={blogs} title="Blogs" />
            <div style={{ margin: "60px 0px" }}>
              {/* Country */}
              <div className="row">
                <div className="input-group">
                  <label>Country</label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  >
                    <option value="">Choose your country</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="India">India</option>
                    {/* Add more countries as needed */}
                  </select>
                </div>

                {/* State */}
                <div className="input-group">
                  <label>State</label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  >
                    <option value="">Choose your state</option>
                    {/* Add states dynamically based on selected country */}
                    <option value="California">California</option>
                    <option value="Texas">Texas</option>
                    <option value="Ontario">Ontario</option>
                    <option value="Maharashtra">Maharashtra</option>
                    {/* Add more states as needed */}
                  </select>
                </div>
              </div>
              <div className="row">
                {/* City */}
                <div className="input-group">
                  <label>City</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  >
                    <option value="">Choose your city</option>
                    {/* Add cities dynamically based on selected state */}
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Houston">Houston</option>
                    <option value="Toronto">Toronto</option>
                    <option value="Mumbai">Mumbai</option>
                    {/* Add more cities as needed */}
                  </select>
                </div>

                {/* Street */}
                <div className="input-group">
                  <label>Street</label>
                  <input
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    placeholder="Enter street address"
                    required
                  />
                </div>

                {/* Postal Code */}
                <div className="input-group">
                  <label>Postal Code</label>
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Enter postal code"
                    required
                  />
                </div>
              </div>

              {/* Real Estate Agent Search */}
              <div className="input-group" style={{ marginTop: "20px" }}>
                <label>Find real estate agent for your business location</label>
                <button
                  className="btn"
                  onClick={handleGoogleSearch}
                  disabled={!country || !state || !city}
                >
                  Google Search
                </button>
              </div>

              {/* Submit Button */}
              <div style={{ marginTop: "20px" }}>
                <button className="btn" onClick={handleSubmit}>
                  {loading? <div className="spinner"></div>:''
                  }
                  Save Location
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
