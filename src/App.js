import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Austin" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/asthermoreno10/"
            target="_blank"
            rel="noreferrer"
          >
            Ash Moreno
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/AshM10/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
