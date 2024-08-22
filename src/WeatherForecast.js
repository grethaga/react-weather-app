import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data]);

  function handleResponse(response) {
    console.log(response.data.daily);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "o0d0713230t29ff3bf6accc034c782b3";
    let lon = props.data.longitude;
    let lat = props.data.latitude;
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);

    return null;
  }
}
