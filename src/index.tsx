import React from "react";
import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./state/Search";

const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
