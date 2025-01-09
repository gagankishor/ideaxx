 import { RiSeoLine } from "react-icons/ri";
import { FaMale } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";

export const TeamLegal = () => {
  
  return (
    <>
      <div className="dashboard container">
        <div className="content">
          <h1 id="heading">
            <RiSeoLine />
            Team
          </h1>
          <form className="form">
            <div className="row">
              <div className="col">
                <input type="text"  placeholder="New team member contract
" readOnly/>
              </div>
              <div className="col" style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <CiFileOn size={100} />
                  <input type="file"  />

                  <label htmlFor="">Upload</label>
                </div>{" "}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <CiFileOn size={100} />
                  <input type="file" />
                  <label htmlFor="">Upload</label>
                </div>
              </div>
            </div>
            <div className="assigned-to-container">
              <div className="card">
                <div className="icon-wrapper">
                  <FaMale className="user-icon" />
                </div>
                <h3>Martin </h3>
                <div className="status-icon" style={{ color: "yellow" }}>
                  Pending
                </div>

                <p>Marketing</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
