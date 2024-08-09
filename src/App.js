import "./App.css";
import React, { useState } from "react";
const App = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <button onClick={() => {window.ReactNativeWebView.postMessage('Hello')}}>send to RN webview</button>
    </div>
  );
};

export default App;
