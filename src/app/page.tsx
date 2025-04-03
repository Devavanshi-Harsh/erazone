"use-client";
import styles from "./style.module.scss";

import { Profile } from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}
