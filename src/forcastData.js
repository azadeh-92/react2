import React from "react";
import WeatherIcon from "./weatherIcon";
export default function ForcastData(props) {
  let timing = new Date(1000 * props.data.time);
  let dayTime = timing.getDay();
  let Days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let dayWeek = Days[dayTime];

  return (
    <div className="row forcast">
      <div className="forcastDay">{dayWeek}</div>
      <div className="forcastIcon">
        <WeatherIcon des={props.data.condition.icon} size={30} />
      </div>
      <div className="forcastTemp">
        <span className="forcastMax">
          {Math.round(props.data.temperature.maximum)}
        </span>
        <span className="forcastMin">
          {" "}
          {Math.round(props.data.temperature.minimum)}
        </span>
      </div>
    </div>
  );
}
