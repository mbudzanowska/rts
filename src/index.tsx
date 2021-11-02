import React from "react";
import ReactDOM from "react-dom";
import UserSearch from "./classes/UserSearch";

const App = () => {
  return (
    <div>
      <UserSearch
        users={[
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
        ]}
      />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
