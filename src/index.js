import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/Home";
import Error from "./pages/ErrorPage/ErrorPage";
import Apropos from "./pages/AproposPage/AproposPage";
import Header from "./components/Header/header";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardPage from "./pages/CardPage/CardPage";
import Footer from "./components/Footer/footer"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="//card/:cardId" element={<CardPage />} />
        <Route path="/a-propos" element={<Apropos />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
