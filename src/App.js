import "./styles/App.css";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Top } from "./components/Top";
import { About } from "./components/About";
import { Favorite } from "./components/Favorite";

function App() {
  return (
    <>
      <Header />
      <Top />
      <About />
      <Favorite />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
