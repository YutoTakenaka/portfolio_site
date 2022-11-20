import "./styles/App.css";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Top } from "./components/Top";

function App() {
  return (
    <>
      <Header />
      <Top />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
