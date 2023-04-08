import "./styles/App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/molecules/Header";
import { NotFound } from "./components/molecules/NotFound";
import { TopPage } from "./components/pages/TopPage";
import { ContactPage } from "./components/pages/ContactPage";
import { FavoritePage } from "./components/pages/FavoritePage";
import { AboutPage } from "./components/pages/AboutPage";
import { SkillsPage } from "./components/pages/SkillsPage";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<TopPage />} />
          <Route exact path={"/top"} element={<TopPage />} />
          <Route exact path={"/about"} element={<AboutPage />} />
          <Route exact path={"/favorite"} element={<FavoritePage />} />
          <Route exact path={"/skill"} element={<SkillsPage />} />
          <Route exact path={"/contact"} element={<ContactPage />} />
          <Route path={"/*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
