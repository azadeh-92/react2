import React from "react";
import Newdate from "./newdate";
import WeatherIcon from "./weatherIcon";
import Selsius from "./selsius";
export default function Weatherinfo(props) {
  return (
    <div>
      <div className="firsttext">
        <span className="text-left graytext"> Results for</span>
        <span className="font-weight-bold importantext d-inline">
          {" "}
          {props.weather.cityName}, {props.weather.countryName} Country
        </span>
      </div>

      <div className="row">
        <div className=" d-inline col-6">
          <WeatherIcon des={props.weather.iconDis} size={50} />

          <Selsius sel={props.weather.temp} />
          <ul className="d-inline-block list-unstyled ms-3 firstlist">
            <li>Humidity: {props.weather.humidity}% </li>
            <li>Wind: {Math.round(props.weather.wind)} km/h</li>
          </ul>
        </div>
        <div className="col-6 rightlist">
          <ul className="d-inline-block list-unstyled">
            <li className="weth">Weather</li>
            <li className="day">
              {" "}
              <Newdate date={props.weather.date} />{" "}
            </li>
            <li className="day text-capitalize">
              {" "}
              {props.weather.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
