import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vienna" />
        <footer>
          This project was coded by Gretha Gall and is{" "}
          <a
            href="https://github.com/grethaga/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://shecodes-react-prjct.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
