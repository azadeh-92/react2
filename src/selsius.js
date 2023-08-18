import React, { useState } from "react";
export default function Selsius(props) {
  let [selOn, setSelOn] = useState(true);
  function GoFar(event) {
    event.preventDefault();
    setSelOn(false);
  }
  function GoSel(event) {
    event.preventDefault();
    setSelOn(true);
  }
  if (selOn) {
    return (
      <div className="d-inline">
        <span className="vimp">{Math.round(props.sel)}</span>
        <span className="degree">°C|</span>
        <a href="/" className="degree" onClick={GoFar}>
          {" "}
          °F
        </a>
      </div>
    );
  } else {
    return (
      <div className="d-inline">
        <span className="vimp">{Math.round((props.sel * 9) / 5 + 32)}</span>
        <a href="/" className="degree" onClick={GoSel}>
          {" "}
          °C
        </a>
        <span className="degree">|°F</span>
      </div>
    );
  }
}
