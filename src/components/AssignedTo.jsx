import React from "react";
import { FaMale } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

export const AssignedTo = ({ tasklist, title }) => {
  return (
    <div className="assigned-to-container">
      {tasklist.map((item) => (
        <div key={item.id} className="card">
          <div className="icon-wrapper">
            <FaMale className="user-icon" />
          </div>
          <h3>Assigned to {item.assignedTo}</h3>
          <IoCheckmarkDoneCircle className="status-icon" />

          <p>{item.name}</p>
          <p>{item.assignedTo} {item.update}</p>

            {item.status?
          <div className="rating">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <span>Rate {item.assignedTo}</span>
            
          </div>
            :
            ''
            }
        </div>
      ))}
    </div>
  );
};
