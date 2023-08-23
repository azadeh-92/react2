import React, { useState } from "react";
import "./weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Weatherinfo from "./weatherinfo";
import WeatherForcast from "./weatherForcast";

export default function Weather(props) {
  let [city, setCity] = useState(props.city);
  let [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data.condition.icon);
    setWeather({
      temp: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      cityName: response.data.city,
      countryName: response.data.country,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      iconDis: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
      ready: true,
    });
  }
  function SearchCity(event) {
    event.preventDefault();
    const key = "80d30bftce9bob6014a53382c1be36a8";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <div>loading...</div>;
  }
  function CityName(event) {
    setCity(event.target.value);
  }
  if (weather.ready) {
    return (
      <div className=" wt rounded">
        <form className="text-left pb-3" onSubmit={SearchCity}>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city ..."
                className="form-control text-muted"
                autoFocus="on"
                onChange={CityName}
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
        <Weatherinfo weather={weather} />
        <WeatherForcast city={weather.cityName} />
      </div>
    );
  } else {
    const key = "80d30bftce9bob6014a53382c1be36a8";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <div>loading...</div>;
  }
}
