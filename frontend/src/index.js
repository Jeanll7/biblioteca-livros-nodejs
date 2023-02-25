import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Livro from "./Livro";
import Cliente from "./Cliente";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route key="aluguel" path="/aluguel" element={<App />} />
        <Route key="livro" path="/livro" element={<Livro />} />
        <Route key="cliente" path="/cliente" element={<Cliente />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
