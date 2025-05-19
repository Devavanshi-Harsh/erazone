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
          <span className={styles.imText}>
            I&apos;m a <TypingEffect />
          </span>
          <h1 className={styles.name}>{NAME}</h1>
          <p>
            Software Engineer with <b>4+ years</b> of experience, specializing
            in Java backend development for enterprise applications. Proven
            track record of delivering high-impact solutions using{" "}
            <b>Java, Spring Boot, SQL,</b> and <b>microservices</b>{" "}
            architecture. Experienced in supporting frontend integration with{" "}
            <b>React.js</b> and <b>React Native</b> as needed. Strong in <b>API design</b>,
            CI/CD pipelines, and collaborating with global teams in Agile
            environments.I build websites and apps from start to finish. I
            handle the behind-the-scenes logic (with Java) and the user-friendly
            interfaces you see on screen (with React). Whether it’s creating
            fast, reliable systems or designing intuitive features, I love
            solving problems that make apps work better and look great. Let’s
            chat about how I can help your team turn ideas into reality!
          </p>
        </div>
      </div>
    </div>
  );
}
