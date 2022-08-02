import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Route />
    <NavLink />
  </BrowserRouter>,
  document.getElementById("root")
);