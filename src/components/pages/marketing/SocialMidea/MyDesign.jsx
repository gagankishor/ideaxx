"use client";
import { AssignedTo } from "@/components/components/AssignedTo";
import { Pletforms } from "@/components/components/Pletforms";
import { FaPlus } from "react-icons/fa";
import { TbSocial } from "react-icons/tb";

// import { status } from "nprogress";

export const MyDesign = () => {
const platforms = [
  { id: 1, name: "", logo: "/vantom.jpg", link: "https://canva.com/"},
  { id: 2, name: "", logo: "/business1.webp", link: "#" },
  { id: 3, name: "", logo: "/business2.webp", link: "#" },
  { id: 4, name: "", logo: "/business3.webp", link: "#" },
];
const tasklist = [
  {
    id: 1,
    name: "Download post",
    status: true,
    update:"Mike Delivered on time",
    link: "",
    assignedTo:'mike'
  },
  { id: 3, name: "Download post",update:" Delivered on time", status: false, link: "#" ,assignedTo:'john'},
  { id: 4, name: "Under Process",update:" will deliver it in two business days", status: false, link: "#" ,assignedTo:'sam'},
];
return (
  <>
    
    <div className="dashboard container">
      <div className="content">

        <div className="top-continer">

        <h1 id="heading">
          <TbSocial />
          Social Media
        </h1>
      <button className="btn"> Make new post design <FaPlus/>
      </button>
        </div>
      <div className="content">
        <form action="" className="form">
          <AssignedTo tasklist={tasklist} />
          <Pletforms platforms={platforms} title="View Posts Library" />
        </form>
      </div>
      </div>

    </div>
  </>
);
};
