import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import mainReducer from "./redux/reducers/mainReducer";
import thunk from "redux-thunk";
import axios from "axios";

const globalStore = createStore(mainReducer, applyMiddleware(thunk));

axios.defaults.baseURL = "https://citas-medicas-04.herokuapp.com/api/";
//https://citas-medicas-04.herokuapp.com/api/
ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
