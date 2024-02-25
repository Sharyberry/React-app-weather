import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
        <small>
          <a
            href="https://github.com/Sharyberry/React-app-weather"
            target="_blank"
          >
            Open-source code
          </a>
          by
          <a href="https://www.instagram.com/sharyberry_m/" target="_blank">
            Sharon Mahlakeng
          </a>
        </small>
      </header>
    </div>
  );
}

export default App;
