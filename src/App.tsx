import React from "react";
import logo from "./logo.svg";
import { css, cx } from "@emotion/css";
import "./App.css";

function App() {
  return (
    <div className={cx("App", styles)}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const styles = css({
  backgroundColor: "lightgreen",
});

export default App;
