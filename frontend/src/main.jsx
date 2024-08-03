import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";

// In the video call scenario, set mode to "rtc"
const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <AgoraRTCProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
    </AgoraRTCProvider>
  </BrowserRouter>
);
