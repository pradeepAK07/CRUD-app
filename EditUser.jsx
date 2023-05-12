import { useState } from "react";

const EditUser = (props) => {
  const [user, setUser] = useState(props.currentUser);

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
          props.updateUser(user.id, user);
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
        <button type="submit"> update User </button>
        <button
          onClick={() => {
            props.setEditing(false);
          }}
        >
          clear
        </button>
      </form>
    </div>
  );
};

export default EditUser;
