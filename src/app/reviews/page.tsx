"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Recommendations.module.scss";

const RecommendationsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const recommendations = Array.from({ length: 13 }, (_, i) => ({
    id: i + 1,
    src: `/images/recommendations/pr${i + 1}.jpg`,
  }));

  return (
    <div>
      <section className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles.title}>Professional Endorsements</h2>
          <p className={styles.subtitle}>Peer-Validated Technical Expertise</p>
        </div>

        <div className={styles.galleryContainer}>
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className={styles.card}
              onClick={() => setSelectedImage(rec.src)}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={rec.src}
                  alt={`Recommendation from connection ${rec.id}`}
                  fill
                  className={styles.image}
                  quality={80}
                />
                <div className={styles.overlay}>
                  <span className={styles.badge}>#{rec.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged view */}
        {selectedImage && (
          <div className={styles.modal} onClick={() => setSelectedImage(null)}>
            <div className={styles.modalContent}>
              <Image
                src={selectedImage}
                alt="Enlarged recommendation"
                width={1200}
                height={800}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default RecommendationsGallery;
