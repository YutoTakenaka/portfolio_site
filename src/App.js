import "./styles/App.css";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Top } from "./components/Top";
import { About } from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Top />
      <About />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
