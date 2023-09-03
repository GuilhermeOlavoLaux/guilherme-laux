import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section className={styles.projects}>
      <h1 className={styles.projects__title}>Alguns dos meus projetos</h1>
      <p>kkk</p>
      <p>kkk</p>
      <p>kkk</p>
      <p>kkk</p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={styles.projects__wave}
      >
        <path
          fill="rgb(30, 74, 98)"
          fill-opacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,101.3C672,85,768,107,864,117.3C960,128,1056,128,1152,117.3C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
}
