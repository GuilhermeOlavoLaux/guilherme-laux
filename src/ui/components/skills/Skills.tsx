import styles from "./Skills.module.css";
import { SkillCard } from "@components/skill-card/SkillCard";
import useSkillCards, { SkillCardPropsTypes } from "@hooks/useSkillCards";

export default function Skills() {
  const skillCards = useSkillCards();

  return (
    <section className={`container ${styles.skills}`}>
      <h1 className={styles.skills__title}>Habilidades</h1>

      {skillCards.map((skillCard: SkillCardPropsTypes) => {
        return (
          <SkillCard
            id={skillCard.id}
            image={skillCard.image}
            imageAlt={skillCard.imageAlt}
            title={skillCard.title}
            description={skillCard.description}
          />
        );
      })}
    </section>
  );
}
