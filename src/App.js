import "./styles/App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/molecules/Header";
import { NotFound } from "./components/molecules/NotFound";
import { TopPage } from "./components/pages/TopPage";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<TopPage />} />
          <Route exact path={"/top"} element={<TopPage />} />
          <Route exact path={"/about"} element={<TopPage />} />
          <Route exact path={"/favorite"} element={<TopPage />} />
          <Route exact path={"/skill"} element={<TopPage />} />
          <Route exact path={"/contact"} element={<TopPage />} />
          <Route exact path={"/*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
