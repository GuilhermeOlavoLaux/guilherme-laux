import AboutMe from "@components/about-me/AboutMe";
import styles from "./GuilhermeLaux.module.css";
import Header from "@components/header/Header";
import Skills from "@components/skills/Skills";

export default function GuilhermeLaux() {
  return (
    <div className={styles.guilherme__laux}>
      <Header />
      <AboutMe />
      <Skills />
    </div>
  );
}
