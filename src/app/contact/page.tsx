"use client";
import { useState } from 'react';
import styles from './ContactForm.module.scss';
import Link from 'next/link';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobOffer: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.jobOffer || !formData.message) {
      alert('All fields are required');
      return;
    }
    
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch('https://ez-production.up.railway.app/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': 'OMpqVWAH.UC80wyXTtPwhDgAUdCTx6'
        },
        body: JSON.stringify([{
          name: formData.name,
          email: formData.email,
          message: `Job Offer: ${formData.jobOffer}\nMessage: ${formData.message}`
        }])
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        jobOffer: '',
        message: ''
      });

      // Clear success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
        let errorMessage = 'Failed to submit form';
      
        if (error instanceof Error) {
          errorMessage = error.message;
        } else if (typeof error === 'string') {
          errorMessage = error;
        }
        setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.homeButton}>
          &larr; Back to Home
        </Link>
      <h1 className={styles.title}>Get in Touch</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              placeholder="John Doe"
              required
            />
          </label>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="john@example.com"
              required
            />
          </label>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            Job Offer
            <input
              type="text"
              name="jobOffer"
              value={formData.jobOffer}
              onChange={handleChange}
              className={styles.input}
              placeholder="Position you're offering"
              required
            />
          </label>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Your message..."
              rows={5}
              required
            />
          </label>
        </div>

        {submitError && (
          <div className={styles.errorMessage}>
            ⚠️ {submitError}
          </div>
        )}

        {submitSuccess && (
          <div className={styles.successMessage}>
            ✅ Message sent successfully!
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting ? (
            <div className={styles.spinner} />
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
}