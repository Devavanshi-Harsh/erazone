import { NAME, OBJECTIVE } from "@/util/Portfolio";
import styles from "./Profile.module.scss";
export function Profile() {
  return (
    <div className={styles.containerBox}>
      <div className={styles.innerContainerBox}>
        <img
          alt="Harsh"
          src="/images/harsh.png"
          className={styles.portfolioImage}
        />
        <div className={styles.textContainer}>
          <span className={styles.imText}>I&apos;m</span>
          <h1 className={styles.name}>{NAME}</h1>
          <p>{OBJECTIVE}</p>
        </div>
      </div>
    </div>
  );
}
