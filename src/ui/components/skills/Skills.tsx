import styles from "./Skills.module.css";
import { SkillCard } from "@components/skill-card/SkillCard";
import useSkillCards, { SkillCardPropsTypes } from "@hooks/useSkillCards";
import { WorkExperience } from "@components/work-experience/WorkExperience";

export default function Skills() {
  const skillCards = useSkillCards();

  return (
    <section className={styles.skills}>
      <h1 className={styles.skills__title}>O que ofereço?</h1>
      <div className={styles.skills__cards}>
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
      </div>
      <WorkExperience />
    </section>
  );
}
