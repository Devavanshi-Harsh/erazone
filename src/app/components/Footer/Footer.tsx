// Footer.jsx
import styles from "./footer.module.scss";
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiInstagram,
} from "react-icons/fi"; // Use react-icons for professionalism
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.contactGroup}>
            <h3 className={styles.title}>Get in Touch</h3>
            <address className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <a href="tel:+918178396703" className={styles.link}>
                  <FiPhone className={styles.icon} />
                  +91 81783 96703
                </a>
              </div>
              <div className={styles.contactItem}>
                <a href="mailto:hdevavan@gmail.com" className={styles.link}>
                  <FiMail className={styles.icon} />
                  hdevavan@gmail.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <a
                  href="https://www.google.com/maps/place/Rajiv+Chowk+Flyover+Shanti+Nagar,+Shivaji+Nagar,+Sector+11,+Connaught+Place,+New+Delhi,+Delhi+122001/@28.632956,77.2195463,21z/data=!4m6!3m5!1s0x390cfdd2c7173c39:0xbe9bca0c1734f48!8m2!3d28.6329422!4d77.2194906!16s%2Fg%2F11pvwx5827?entry=ttu&g_ep=EgoyMDI1MDMzMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                  className={styles.link}
                >
                  <CiLocationOn className={styles.icon} />
                  New Delhi, India
                </a>
              </div>
              <div className={styles.contactItem}>
              <label>
                  
                  </label>
                <a
                  href="https://linkedin.com/in/hdevavan"
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin className={styles.icon} />
                  /hdevavan
                </a>
              </div>
              <div className={styles.contactItem}>
                <a
                  href="https://github.com/Devavanshi-Harsh"
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub className={styles.icon} />
                  /Devavanshi-Harsh
                </a>
              </div>
              <div className={styles.contactItem}>
                <a
                  href="https://www.instagram.com/harsh_uncensored_/"
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiInstagram className={styles.icon} />
                  harsh_uncensored_
                </a>
              </div>
            </address>
          </div>

          <div className={styles.legalSection}>
            <p className={styles.copyright}>
              © 2024 Harsh Devavanshi
              <br />
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
