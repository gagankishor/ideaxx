import { RiSeoLine } from "react-icons/ri";
import { FaFile, FaMale } from "react-icons/fa";

export const MyTeam = () => {

  const tasklist = [
    { id: 1, name: "Under Process", status: false, update: "Management", assignedTo: "Brad" },
    { id: 2, name: "Under Process", status: false, update: "Management", assignedTo: "Tina" },
    { id: 3, name: "Under Process", status: false, update: "Designer", assignedTo: "Mike" },
    { id: 4, name: "Under Process", status: false, update: "IT", assignedTo: "Vikas" },
    { id: 5, name: "Under Process", status: false, update: "Support", assignedTo: "Martin" },
    { id: 6, name: "Under Process", status: false, update: "Legal", assignedTo: "Luna" },
    { id: 7, name: "Under Process", status: false, update: "Planner", assignedTo: "Mia" },
    { id: 8, name: "Under Process", status: false, update: "Account", assignedTo: "Khalid" },
  ];

  return (
    <>
      <div className="dashboard container">
        <div className="content">
          <h1 id="heading">
            <RiSeoLine />
            Team
          </h1>
          <div className="form">
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              Be proud of your company&lsquo;s integrated team
            </div>
            <div className="assigned-to-container">
              {tasklist.map((item) => (
                <div key={item.id} className="card">
                  <div className="icon-wrapper">
                    <FaMale className="user-icon" />
                  </div>
                  <h3>{item.assignedTo}</h3>
                  <div className="status-icon">Active</div>
                  <p>{item.update}</p>
                  {item.status && (
                    <div className="rating">
                      <div className="stars">⭐⭐⭐⭐⭐</div>
                      <span>Rate {item.assignedTo}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div id="section-heading" style={{ textAlign: "center", margin: "50px 0px" }}>
              As your business expands, ideax will increase your work team members by default
            </div>
            <div>
              <label htmlFor="reason-textarea" style={{ display: "block", marginBottom: "10px" }}>
                Describe the reason for assigning a new team member
              </label>
              <textarea
                id="reason-textarea"
                style={{ width: "600px", height: "200px", padding: "20px" }}
                placeholder="Enter your reason here..."
              />
            </div>

            <div className="row">
              <div className="col" style={{ width: "200px", height: "200px", margin: "30px 0px 60px" }}>
                <div style={{ textAlign: "center", margin: "5px" }}>Assign new team member</div>
                <div className="assigned-to-container">
                  <div className="card">
                    <div className="icon-wrapper">
                      <FaMale className="user-icon" />
                    </div>
                    <h3>Martin</h3>
                    <div className="status-icon">Active</div>
                    <p>Marketing</p>
                  </div>
                </div>
              </div>

              <div className="col" style={{ width: "200px", height: "200px", margin: "30px" }}>
                <div style={{ textAlign: "center", margin: "5px",height:"70px" }}>Job description</div>
                <textarea
                  style={{ width: "200px", height: "200px" }}
                  name="jobDescription"
                  placeholder="Enter job description"
                />
              </div>

              <div className="col" style={{ width: "200px", height: "200px", margin: "30px" }}>
                <div style={{ textAlign: "center", margin: "5px",height:"70px" }}>Upload CV</div>
                <div style={{ textAlign: "center", margin: "5px" }}>
                  <FaFile size={100} />
                  <input type="file" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
