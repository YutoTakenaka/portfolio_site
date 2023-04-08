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
      <BrowserRouter basename="/bejewelled-zuccutto-01a613">
        <Routes>
          <Route index element={<TopPage />} />
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/favorite"} element={<FavoritePage />} />
          <Route path={"/skill"} element={<SkillsPage />} />
          <Route path={"/contact"} element={<ContactPage />} />
          <Route path={"/*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
