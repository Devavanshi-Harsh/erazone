import { NAME, OBJECTIVE } from "@/util/Portfolio";
import styles from "./Profile.module.scss";
import Image from "next/image";
import TypingEffect from "./TypingEffect";
import { basePath } from "@/app/util/helper";

export function Profile() {
  return (
    <div className={styles.containerBox}>
      <div className={styles.innerContainerBox}>
        <Image
          src={`${basePath}/images/harsh.png`}
          alt="Harsh"
          className={styles.portfolioImage}
          width={200}
          height={200}
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
