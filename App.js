import React, { useState } from "react";
import UserTable from "./New/UserTable";
import UserForm from "./New/UserForm";
import EditUser from "./New/EditUser";
import "./App.css";

function App() {
  const userData = [
    {
      id: 1,
      name: "wayne",
      age: 27,
    },
    {
      id: 2,
      name: "wes",
      age: 27,
    },
    {
      id: 3,
      name: "raphel",
      age: 37,
    },
  ];

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const delUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const [users, setUsers] = useState(userData);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", age: null };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, age: user.age });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };
  return (
    <div className="container">
      <h1>CRUD app with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUser
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <UserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <UserTable delUser={delUser} users={users} editRow={editRow} />
        </div>
      </div>
      {/* <New /> */}
      {/* <DivText /> */}
    </div>
    // <div></div>
  );
}

export default App;
