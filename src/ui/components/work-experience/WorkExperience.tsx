import { useState } from "react";
import CocaCola from "@assets/coca-cola.svg";
import Cwi from "@assets/cwi.png";
import ComplianceTotal from "@assets/compliance-total.png";
import PrivacyTools from "@assets/privacy-tools.png";

import styles from "./WorkExperience.module.css";

export function WorkExperience() {
  return (
    <div className={styles.work_experience}>
      <h1 className={styles.work_experience__title}>
        Empresas e projetos que tive o prazer de participar
      </h1>

      <div className={styles.work_experience__logos__container}>
        <img src={CocaCola} alt="" className={styles.work_experience__logo} />
        <img src={Cwi} alt="" className={styles.work_experience__logo} />

        <img
          src={PrivacyTools}
          alt=""
          className={styles.work_experience__privacy__logo}
        />
        <img
          src={ComplianceTotal}
          alt=""
          className={styles.work_experience__logo}
        />
        <svg
          className={styles.work_experience__wave}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgb(30, 74, 98)"
            fill-opacity="1"
            d="M0,320L48,288C96,256,192,192,288,165.3C384,139,480,149,576,165.3C672,181,768,203,864,218.7C960,235,1056,245,1152,229.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
