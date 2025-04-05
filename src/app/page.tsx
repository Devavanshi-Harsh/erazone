"use-client";
import styles from "./style.module.scss";

import { Profile } from "./components/Profile/Profile";

export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <Profile />
    </div>
  );
}
