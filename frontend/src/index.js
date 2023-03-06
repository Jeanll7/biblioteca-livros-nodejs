import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./NavBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroLivros from "./CadastroLivros";
import CadastroCliente from "./CadastroCliente";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route key="aluguel" path="/aluguel" element={<App />} />
        <Route key="livro" path="/livro" element={<CadastroLivros />} />
        <Route key="cliente" path="/cliente" element={<CadastroCliente />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
