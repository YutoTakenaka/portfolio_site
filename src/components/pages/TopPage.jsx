import { About } from "../molecules/About";
import { Contact } from "../molecules/Contact";
import { Favorite } from "../molecules/Favorite";
import { Skills } from "../molecules/Skills";
import { Top } from "../molecules/Top";

export const TopPage = () => {
  return (
    <>
      <Top />
      <About />
      <Favorite />
      <Skills />
      <Contact />
    </>
  );
};
