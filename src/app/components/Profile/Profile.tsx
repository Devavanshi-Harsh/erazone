import { NAME, OBJECTIVE } from "@/util/Portfolio";
import styles from "./Profile.module.scss";
import profileImage from "/public/images/harsh.png";
import Image from "next/image";
import TypingEffect from "./TypingEffect";

export function Profile() {
  return (
    <div className={styles.containerBox}>
      <div className={styles.innerContainerBox}>
        <Image
          src={profileImage}
          alt="Harsh"
          className={styles.portfolioImage}
        />
        <div className={styles.textContainer}>
          <span className={styles.imText}>I&apos;m a <TypingEffect /></span>
          <h1 className={styles.name}>{NAME}</h1>
          <p>{OBJECTIVE}</p>
        </div>
      </div>
    </div>
  );
}
