import logo from "./logo3.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Dictionary" />
        </main>
        <footer className="App-footer">
          <small>
            {"This project was coded by "}
            <a
              href="https://www.shecodes.io/graduates/91637-cheryl-watts"
              target="_blank"
              rel="noreferrer"
            >
              Cheryl Watts
            </a>
            {"👩‍💻. It is open-sourced on "}
            <a
              href="https://github.com/chezzer84/dictonary-app"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            {" and hosted on "}
            <a
              href="https://frolicking-speculoos-996da2.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
