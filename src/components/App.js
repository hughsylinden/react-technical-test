import "../styles/App.css";
import React from "react";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <img
        className="App-image"
        alt="nasalogo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
      />
      <Search />
    </div>
  );
}

export default App;
