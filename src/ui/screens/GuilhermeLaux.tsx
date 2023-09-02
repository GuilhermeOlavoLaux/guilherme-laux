import AboutMe from "@components/about-me/AboutMe";
import styles from "./GuilhermeLaux.module.css";
import Header from "@components/header/Header";
import Skills from "@components/skills/Skills";
import { Technologies } from "@components/technologies/Technologies";

export default function GuilhermeLaux() {
  return (
    <div className={styles.guilherme__laux}>
      <Header />
      <AboutMe />
      <Technologies />
      <Skills />
    </div>
  );
}
