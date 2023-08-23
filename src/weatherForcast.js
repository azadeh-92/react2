import React, { useState, useEffect } from "react";
import "./forcast.css";
import axios from "axios";
import ForcastData from "./forcastData";
export default function WeatherForcast(props) {
  let [forcast, setForcast] = useState(null);
  let [load, setLoad] = useState(false);

  function handleResponse(response) {
    console.log(response.data.daily[0]);
    setForcast(response.data.daily);
    setLoad(true);
  }
  useEffect(() => {
    setLoad(false);
    console.log("azi");
  }, [props.city]);
  if (load) {
    return (
      <div className="row">
        {forcast.map(function (day, index) {
          if (index < 6) {
            return (
              <div className="col" key={index}>
                <ForcastData data={day} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    const key = "80d30bftce9bob6014a53382c1be36a8";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${key}`;
    axios.get(apiUrl).then(handleResponse);
    return "loading";
  }
}
