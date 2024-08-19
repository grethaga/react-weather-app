import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);
  let apiKey = "o0d0713230t29ff3bf6accc034c782b3";
  let lon = props.data.longitude;
  let lat = props.data.latitude;
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

  axios.get(apiURL).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <img
            className="forecast-icon"
            src={props.data.icon}
            alt={props.data.description}
          />
          <div className="forecast-temp">
            <span className="forecast-temp-max">19°</span>
            <span className="forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
