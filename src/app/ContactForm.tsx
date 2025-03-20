"use client";
import { useState } from 'react';

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
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Keep all your existing form fields (remove ID field) */}
        <div style={{ marginBottom: '15px' }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Job Offer:</label>
          <input
            type="text"
            name="jobOffer"
            value={formData.jobOffer}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', height: '100px' }}
          />
        </div>

        {submitError && (
          <div style={{ color: 'red', marginBottom: '15px' }}>
            Error: {submitError}
          </div>
        )}

        {submitSuccess && (
          <div style={{ color: 'green', marginBottom: '15px' }}>
            Message sent successfully!
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: '10px 20px',
            backgroundColor: isSubmitting ? '#cccccc' : '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer'
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}