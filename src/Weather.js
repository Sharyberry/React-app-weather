import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [weather, setWeather] = useState(null);
  let [response, setResponse] = useState(false);

  function displayWeather(response) {
    setResponse(true);
    setWeather({
      Temperature: response.data.main.temp,
      Description: response.data.weather[0].description,
      Humidity: response.data.main.humidity,
      Wind: response.data.wind.speed,
      Icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function searchCity(event) {
    event.preventDefault();
    let apiKey = `72bb9dab46b9ec3d65f423c63f27a9b8`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={searchCity}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (response) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.Temperature)}°C</li>
          <li>Description: {weather.Description}</li>
          <li>Humidity: {weather.Humidity}%</li>
          <li>Wind: {weather.Wind}km/h</li>
          <li>
            <img src={weather.Icon} alt="" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
