import PropTypes from "prop-types";
import { FaMale } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

export const AssignedTo = ({ tasklist }) => {
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

          {item.status ? (
            <div className="rating">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <span>Rate {item.assignedTo}</span>
            </div>
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  );
};

AssignedTo.propTypes = {
  tasklist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      assignedTo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      update: PropTypes.string,
      status: PropTypes.bool.isRequired,
    })
  ).isRequired,
};