import { useState } from "react";

const users = [
  {
    age: 23,
    name: "Rivas Brady",
  },
  {
    age: 29,
    name: "Gail Hess",
  },
  {
    age: 31,
    name: "Marquita Vaughn",
  },
  {
    age: 32,
    name: "Wood Horn",
  },
  {
    age: 36,
    name: "Oneill Greene",
  },
  {
    age: 40,
    name: "Sarah Jacobs",
  },
  {
    age: 24,
    name: "Adrienne Hart",
  },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<undefined | { age: number; name: string }>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      <h3>User Search</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      {user && (
        <div>
          {user.name}
          {user.age}
        </div>
      )}
    </div>
  );
};

export default UserSearch;
