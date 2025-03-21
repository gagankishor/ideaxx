// import { SideBar } from "./Sidebar";

import SideBar from "./Sidebar";

export default function Overview() {
  
  return (
    <div className="dashboard container">
      <SideBar />
      <div className="content">
        <h1 id="heading">Overview</h1>
        <form className="form">
          <p>Welcome to ideax platform!</p>
        </form>
      </div>
    </div>
  );
}
