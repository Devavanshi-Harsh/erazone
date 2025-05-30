"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
    { name: "Reviews", path: "/reviews" },
  ];

  return (
    <nav className={styles.navbar} style={{ backgroundColor: "#F4CE14" }}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} style={{ color: "#495E57" }}>
          Java Full Stack Developer
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={styles.navLink}
              style={{ color: "#495E57" }}
            >
              {item.name}
            </Link>
          ))}
          <button
            className={styles.ctaButton}
            style={{ backgroundColor: "#495E57", color: "#F5F7F8" }}
            onClick={() => {
              // Create a link element
              const link = document.createElement("a");
              link.href = "/Harsh_Devavanshi-Java_SE_2025_resume.pdf";
              link.download = "Harsh_Devavanshi-Java_SE_2025_resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download Resume
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <div
            className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
          />
        </button>

        {/* Mobile Navigation */}
        <div
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={styles.mobileLink}
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "#495E57" }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
