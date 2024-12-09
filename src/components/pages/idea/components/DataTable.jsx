import PropTypes from 'prop-types'; // Import PropTypes
import { FaEdit, FaFile } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const DataTable = ({ data, note }) => {
  return (
    <>
      {note && <div className="data-note">{note}</div>}
      <table className="data-table">
        <thead>
          <tr>
            <th>Idea Name</th>
            <th>Create Date</th>
            <th>Last Edit</th>
            <th>Idea Status</th>
            <th>Idea Files</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.idea_name}</td>
              <td>{new Date(item.createdAt).toLocaleDateString()}</td>
              <td>{new Date(item.updatedAt).toLocaleDateString()}</td>
              <td>{item.status}</td>
              <td>
                {item.idea_plan ? (
                  <a
                    href={item.idea_plan}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFile /> View File
                  </a>
                ) : (
                  'No Files'
                )}
              </td>
              <td>
                <Link to={`/idea/edit/${item.id}`}>
                  <FaEdit />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

// Define Prop Types
DataTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      idea_name: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      idea_plan: PropTypes.string, // Optional
    })
  ).isRequired, // Array of objects is required
  note: PropTypes.string, // Optional string
};
