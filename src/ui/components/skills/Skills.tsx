import styles from "./Skills.module.css";
import { SkillCard } from "@components/skill-card/SkillCard";
import useSkillCards, { SkillCardPropsTypes } from "@hooks/useSkillCards";
import { WorkExperience } from "@components/work-experience/WorkExperience";

export default function Skills() {
  const skillCards = useSkillCards();

  return (
    <section className={`container ${styles.skills}`}>
      <div className={styles.skills__container}>
        <h1 className={styles.skills__title}>Habilidades</h1>
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
      </div>
    </section>
  );
}
