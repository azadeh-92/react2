import "./App.css";
import Weather from "./weather.js";

function App() {
  return (
    <div className="App">
      <div className="whole">
        <Weather city="isfahan" />
        <footer className="ms-2 text-muted">
          This project was coded by{" "}
          <a href="https://github.com/azadeh-92">Azadeh</a> and is{" "}
          <a href="https://github.com/azadeh-92/react2">
            open-source on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
