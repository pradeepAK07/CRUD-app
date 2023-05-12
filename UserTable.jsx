import React from "react";
import "./App.css";
const UserTable = (props) => {
  return (
    <div className="head">
      <table className="table">
        <tr>
          <th>Name</th>
          <th>User Name</th>
          <th>Actions</th>
        </tr>
        <tbody className="body">
          {props.users.length > 0 ? (
            props.users.map((users) => (
              <tr key={users.id}>
                <td>{users.name}</td>
                <td>{users.age}</td>
                <td>
                  <button onClick={() => props.editRow(users)}>Edit</button>
                  <button onClick={() => props.delUser(users.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
