// Portfolio.jsx
'use client'
import { useState } from 'react';
import { FiGithub, FiExternalLink, FiDatabase, FiCode, FiSmartphone, FiUsers } from 'react-icons/fi';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const showCaseStudy = (study) => {
    setActiveCaseStudy(study);
  };

  const caseStudies = {
    autozone: {
      title: "AutoZone Commercial Solutions",
      content: (
        <>
          <h3>Enterprise Automotive Management Systems</h3>
          <p>Developed full-stack solutions for AutoZone's commercial division serving 7,000+ stores:</p>
          <ul>
            <li>Led development of consignment program system increasing product visibility by 40%</li>
            <li>Optimized parts picking algorithms reducing warehouse retrieval time by 25%</li>
            <li>Integrated Elasticsearch for real-time inventory tracking across 2M+ SKUs</li>
            <li>Implemented JWT-based auth service handling 50k+ RPM</li>
          </ul>
          <div className={styles.techStack}>
            <span className={styles.techTag}>Spring Boot Microservices</span>
            <span className={styles.techTag}>React/Redux</span>
            <span className={styles.techTag}>AWS Infrastructure</span>
          </div>
        </>
      )
    },
    transunion: {
      title: "TransUnion Credit Analytics Platform",
      content: (
        <>
          <h3>Financial Risk Assessment System</h3>
          <p>Key contributions to credit reporting system serving 500k+ users:</p>
          <ul>
            <li>Developed core algorithms for credit score calculation</li>
            <li>Implemented PCI-DSS compliant OAuth2 security layer</li>
            <li>Optimized Hibernate queries reducing DB load by 55%</li>
            <li>Created automated test framework increasing coverage by 70%</li>
          </ul>
          <div className={styles.techStack}>
            <span className={styles.techTag}>Java 11</span>
            <span className={styles.techTag}>React.js</span>
            <span className={styles.techTag}>Oracle DB</span>
          </div>
        </>
      )
    }
  };

  return (
    <div>
      <section className={styles.portfolio} id="portfolio">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Enterprise Solutions</h2>
          <p className={styles.sectionSubtitle}>4.5 years delivering mission-critical systems</p>

          {/* AutoZone Case Study */}
          <div className={styles.projectCard}>
            <div className={styles.projectContent}>
              <div className={styles.techStack}>
                <span className={styles.techTag}>Java</span>
                <span className={styles.techTag}>Spring Boot</span>
                <span className={styles.techTag}>React Native</span>
                <span className={styles.techTag}>TypeScript</span>
                <span className={styles.techTag}>ELK Stack</span>
                <span className={styles.techTag}>AWS</span>
              </div>
              <h3 className={styles.projectTitle}>AutoZone Commercial Ecosystem</h3>
              <div className={styles.projectStats}>
                <div className={styles.statItem}>
                  <FiDatabase className={styles.statIcon} />
                  <span>2M+ SKUs Managed</span>
                </div>
                <div className={styles.statItem}>
                  <FiUsers className={styles.statIcon} />
                  <span>7k+ Stores Supported</span>
                </div>
              </div>
              <p className={styles.projectDescription}>
                Architected enterprise solutions for North America's largest auto parts retailer:
              </p>
              <ul className={styles.projectHighlights}>
                <li>Consignment program management system</li>
                <li>Real-time inventory tracking platform</li>
                <li>Commercial driver returns mobile app</li>
              </ul>
              <div className={styles.projectLinks}>
                <button 
                  className={styles.linkButton}
                  onClick={() => showCaseStudy('autozone')}
                >
                  Case Details <FiExternalLink />
                </button>
              </div>
            </div>
            <div className={styles.projectImage}>
              <img src="http://www.allglassglobal.com/wp-content/uploads/2014/06/commercial_autozone_earlimart_3.jpg" alt="Commercial Ecosystem Architecture" />
            </div>
          </div>

          {/* TransUnion Case Study */}
          <div className={`${styles.projectCard} ${styles.reverse}`}>
            <div className={styles.projectContent}>
              <div className={styles.techStack}>
                <span className={styles.techTag}>Java 8</span>
                <span className={styles.techTag}>Spring MVC</span>
                <span className={styles.techTag}>React.js</span>
                <span className={styles.techTag}>JUnit</span>
                <span className={styles.techTag}>Oracle</span>
                <span className={styles.techTag}>Jenkins</span>
              </div>
              <h3 className={styles.projectTitle}>TransUnion Credit Intelligence</h3>
              <div className={styles.projectStats}>
                <div className={styles.statItem}>
                  <FiSmartphone className={styles.statIcon} />
                  <span>500k+ Monthly Users</span>
                </div>
                <div className={styles.statItem}>
                  <FiCode className={styles.statIcon} />
                  <span>70% Test Automation</span>
                </div>
              </div>
              <p className={styles.projectDescription}>
                Developed core components for global credit reporting platform:
              </p>
              <ul className={styles.projectHighlights}>
                <li>Credit risk assessment algorithms</li>
                <li>PCI-DSS compliant API gateway</li>
                <li>Automated fraud detection system</li>
              </ul>
              <div className={styles.projectLinks}>
                <button 
                  className={styles.linkButton}
                  onClick={() => showCaseStudy('transunion')}
                >
                  Implementation Details <FiGithub />
                </button>
              </div>
            </div>
            <div className={styles.projectImage}>
              <img src="https://cubicleninjas.com/wp-content/uploads/2019/07/TransUnion-Frame-12.jpg" alt="Credit Analytics Dashboard" />
            </div>
          </div>

          {/* Case Study Modal */}
          {activeCaseStudy && (
            <div className={styles.modalOverlay} onClick={() => setActiveCaseStudy(null)}>
              <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h3>{caseStudies[activeCaseStudy].title}</h3>
                {caseStudies[activeCaseStudy].content}
                <button 
                  className={styles.closeButton}
                  onClick={() => setActiveCaseStudy(null)}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Skills Matrix */}
          <div className={styles.skillsMatrix}>
            <h3 className={styles.matrixTitle}>Engineering Impact</h3>
            <div className={styles.matrixGrid}>
              <div className={styles.matrixItem}>
                <span className={styles.metric}>4.8x</span>
                <span className={styles.metricLabel}>System Performance</span>
              </div>
              <div className={styles.matrixItem}>
                <span className={styles.metric}>320k+</span>
                <span className={styles.metricLabel}>LoC Optimized</span>
              </div>
              <div className={styles.matrixItem}>
                <span className={styles.metric}>98.9%</span>
                <span className={styles.metricLabel}>Uptime SLA</span>
              </div>
              <div className={styles.matrixItem}>
                <span className={styles.metric}>70%</span>
                <span className={styles.metricLabel}>Test Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;