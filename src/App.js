import "./App.css";
import React from "react";
const App = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <button
        onClick={() => {
          window.ReactNativeWebView.postMessage("Hello");
        }}
      >
        send to RN webview
      </button>
      <button
        onClick={() => {
          window.ReactNativeWebView.postMessage("Hello", "*");
        }}
      >
        send to RN webview with "*"
      </button>
    </div>
  );
};

export default App;
