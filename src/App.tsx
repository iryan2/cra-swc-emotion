import React from "react";
import logo from "./logo.svg";
import { css, cx } from "@emotion/css";
import "./App.css";
import { Parent } from "./Parent";

function App() {
  return (
    <div className={cx("App", styles)}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Parent />
    </div>
  );
}

const styles = css({
  backgroundColor: "lightgreen",
});

export default App;
