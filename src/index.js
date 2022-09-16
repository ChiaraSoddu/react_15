import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store, persister } from "./redux/store/index.js";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
