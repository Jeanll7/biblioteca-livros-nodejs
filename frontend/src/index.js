import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./NavBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route key="aluguel" path="/aluguel" element={<App />} />
        <Route
          key="livro"
          path="/livro"
          element={() => {
            return <h1>Livro</h1>;
          }}
        />
        <Route
          key="cliente"
          path="/cliente"
          element={() => {
            return <h1>Cliente</h1>;
          }}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
