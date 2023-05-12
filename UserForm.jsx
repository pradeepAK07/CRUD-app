import React, { useState } from "react";

const UserForm = (props) => {
  const initialState = { id: null, name: "", age: "" };
  const [user, setUser] = useState(initialState);
  const HandleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!user.name || !user.age) return;
          props.addUser(user);
          console.log(user);
          setUser(initialState);
        }}
      >
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={HandleChange}
        />
        <label> age: </label>
        <input
          type="text"
          name="age"
          value={user.age}
          onChange={HandleChange}
        />
        <button type="submit"> Add User </button>
      </form>
    </div>
  );
};

export default UserForm;
