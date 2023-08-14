import React, { useState } from "react";
import "./weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Newdate from "./newdate";

export default function Weather(props) {
  let [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data.condition.description);
    setWeather({
      temp: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      cityName: response.data.city,
      countryName: response.data.country,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      ready: true,
      date: new Date(response.data.time * 1000),
    });
  }
  if (weather.ready) {
    return (
      <div className=" wt rounded">
        <form className="text-left pb-3">
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city ..."
                className="form-control text-muted"
                autoFocus="on"
              ></input>
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              ></input>
            </div>
          </div>
        </form>
        <div className="firsttext">
          <span className="text-left graytext"> Results for</span>
          <span className="font-weight-bold importantext d-inline">
            {" "}
            {weather.cityName}, {weather.countryName} Country
          </span>
        </div>

        <div className="row">
          <div className=" d-inline col-6">
            <img
              src={weather.icon}
              alt={weather.description}
              className="d-inline icon"
            ></img>
            <div className="d-inline">
              <span className="vimp">{Math.round(weather.temp)}</span>
              <span className="degree">°C</span>
            </div>
            <ul className="d-inline-block list-unstyled ms-3 firstlist">
              <li>Humidity: {weather.humidity}% </li>
              <li>Wind: {Math.round(weather.wind)} km/h</li>
            </ul>
          </div>
          <div className="col-6 rightlist">
            <ul className="d-inline-block list-unstyled">
              <li className="weth">Weather</li>
              <li className="day">
                {" "}
                <Newdate date={weather.date} />{" "}
              </li>
              <li className="day text-capitalize"> {weather.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const key = "80d30bftce9bob6014a53382c1be36a8";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <div>loading...</div>;
  }
}
