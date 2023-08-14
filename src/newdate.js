import React from "react";
export default function Newdate(props) {
  console.log(props.date);
  let day = props.date.getDay();
  let hour = props.date.getHours();
  let min = props.date.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return `${dayNames[day]}   ${hour}:${min}`;
}
