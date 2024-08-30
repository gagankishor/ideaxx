import React from 'react';
import { FaEdit, FaFile } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const DataTable = ({ data, note }) => {
  console.log(data)
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
                  <a href={item.idea_plan } target="_blank" rel="noopener noreferrer">
                    <FaFile /> View File
                  </a>
                  // <Link
                  //   to={{
                  //     pathname: `/idea/plan/view/${item.id}`,
                  //     state: { ideaPlan: item.idea_plan }
                  //   }}
                  // ><FaFile /> View File</Link>
                ) : (
                  'No Files'
                )}
              </td>
              <td>
                {/* <a href={`/edit/${item.id}`}><FaEdit /> Edit</a> */}
                <Link to={`/idea/edit/${item.id}`}><FaEdit /></Link>
                {/* <a href={`#`}><FaEdit /> Edit</a> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
