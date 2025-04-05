// Portfolio.jsx
import { FiGithub, FiExternalLink, FiDatabase, FiCode, FiSmartphone } from 'react-icons/fi';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <div>
        <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Engineering Excellence</h2>
        <p className={styles.sectionSubtitle}>4.5 years delivering enterprise-grade solutions</p>

        {/* AutoZone Case Study */}
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <div className={styles.techStack}>
              <span className={styles.techTag}>Java</span>
              <span className={styles.techTag}>Spring Boot</span>
              <span className={styles.techTag}>React</span>
              <span className={styles.techTag}>Elasticsearch</span>
            </div>
            <h3 className={styles.projectTitle}>AutoZone Inventory Management System</h3>
            <div className={styles.projectStats}>
              <div className={styles.statItem}>
                <FiDatabase className={styles.statIcon} />
                <span>50k+ RPM</span>
              </div>
              <div className={styles.statItem}>
                <FiCode className={styles.statIcon} />
                <span>98.4% Test Coverage</span>
              </div>
            </div>
            <p className={styles.projectDescription}>
              Led end-to-end development of distributed inventory system handling 2M+ SKUs.
              Implemented JVM optimizations reducing GC pauses by 65%, and introduced Redis caching
              layer improving API response times by 40%.
            </p>
            <div className={styles.projectLinks}>
              <a 
                href="#" 
                className={styles.linkButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Case Study <FiExternalLink />
              </a>
            </div>
          </div>
          <div className={styles.projectImage}>
            {/* Add your screenshot path */}
            <img src="/autozone-architecture.png" alt="System Architecture" />
          </div>
        </div>

        {/* Capgemini Finance Project */}
        <div className={`${styles.projectCard} ${styles.reverse}`}>
          <div className={styles.projectContent}>
            <div className={styles.techStack}>
              <span className={styles.techTag}>Core Java</span>
              <span className={styles.techTag}>REST APIs</span>
              <span className={styles.techTag}>React Native</span>
              <span className={styles.techTag}>JUnit</span>
            </div>
            <h3 className={styles.projectTitle}>TransUnion Credit Analytics Platform</h3>
            <div className={styles.projectStats}>
              <div className={styles.statItem}>
                <FiSmartphone className={styles.statIcon} />
                <span>500k+ Users</span>
              </div>
              <div className={styles.statItem}>
                <FiCode className={styles.statIcon} />
                <span>70% Test Automation</span>
              </div>
            </div>
            <p className={styles.projectDescription}>
              Architected mobile-first financial analytics platform processing 10k+ concurrent requests.
              Optimized Hibernate queries reducing DB load by 55%, and implemented OAuth2 security
              layer compliant with PCI-DSS standards.
            </p>
            <div className={styles.projectLinks}>
              <a 
                href="#" 
                className={styles.linkButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Preview <FiGithub />
              </a>
            </div>
          </div>
          <div className={styles.projectImage}>
            <img src="/transunion-mobile.png" alt="Mobile App Preview" />
          </div>
        </div>

        {/* Skills Matrix */}
        <div className={styles.skillsMatrix}>
          <h3 className={styles.matrixTitle}>Technical Impact Matrix</h3>
          <div className={styles.matrixGrid}>
            <div className={styles.matrixItem}>
              <span className={styles.metric}>4.8x</span>
              <span className={styles.metricLabel}>Performance Gains</span>
            </div>
            <div className={styles.matrixItem}>
              <span className={styles.metric}>320k+</span>
              <span className={styles.metricLabel}>Lines Optimized</span>
            </div>
            <div className={styles.matrixItem}>
              <span className={styles.metric}>98.9%</span>
              <span className={styles.metricLabel}>Uptime SLA</span>
            </div>
            <div className={styles.matrixItem}>
              <span className={styles.metric}>70%</span>
              <span className={styles.metricLabel}>Test Automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};
export default Portfolio;