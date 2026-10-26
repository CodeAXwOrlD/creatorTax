'use client';

import { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Send,
} from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Editorial Feedback',
    message: '',
    websiteUrl: '', // Honeypot field for spam prevention
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const subjects = [
    'Editorial Feedback & Corrections',
    'Field Guide Topic Suggestion',
    'Tax Calculator Bug or Enhancement',
    'Partnership & Media Inquiries',
    'Other Administrative Question',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit inquiry. Please try again.');
        return;
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: 'Editorial Feedback & Corrections',
        message: '',
        websiteUrl: '',
      });
    } catch {
      setStatus('error');
      setErrorMessage('Network connection error. Please check your connection and try again.');
    }
  };

  return (
    <div className="contact-form-wrapper">
      {status === 'success' ? (
        <div className="contact-success-card" role="alert">
          <CheckCircle2 size={44} className="success-icon" />
          <h2>Inquiry Dispatched to Editorial Desk</h2>
          <p>
            Thank you for reaching out. Your message has been safely logged in our editorial queue.
            Our research desk reviews correspondence Monday through Friday and typically responds within
            24 to 48 business hours.
          </p>
          <button
            type="button"
            className="button button-dark"
            onClick={() => setStatus('idle')}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          {status === 'error' && (
            <div className="form-error-banner" role="alert">
              <AlertCircle size={18} />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Honeypot field (hidden from screen readers & users, filled only by naive bots) */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <label htmlFor="websiteUrl">Do not fill this field</label>
            <input
              id="websiteUrl"
              type="text"
              name="websiteUrl"
              tabIndex={-1}
              autoComplete="off"
              value={formData.websiteUrl}
              onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
            />
          </div>

          <div className="form-row-dual">
            <div className="form-field-group">
              <label htmlFor="contact-name" className="field-label">
                Full Name / Studio Name <span>*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="e.g. Priyanshu Sharma"
                className="form-input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-field-group">
              <label htmlFor="contact-email" className="field-label">
                Email Address <span>*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="priyanshu@studio.in"
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="form-field-group">
            <label htmlFor="contact-subject" className="field-label">
              Inquiry Subject <span>*</span>
            </label>
            <select
              id="contact-subject"
              className="form-select"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            >
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field-group">
            <label htmlFor="contact-message" className="field-label">
              Detailed Message <span>*</span>
            </label>
            <textarea
              id="contact-message"
              required
              rows={6}
              placeholder="Tell us what you'd like to share, suggest, or correct..."
              className="form-textarea"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <span className="field-hint">
              Minimum 10 characters. Do NOT paste PAN, Aadhaar, bank accounts, or portal passwords.
            </span>
          </div>

          <div className="form-actions-bar">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="button button-dark form-submit-btn"
            >
              {status === 'submitting' ? (
                <>
                  <span>Securing & Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message to Editorial Desk</span>
                  <Send size={15} />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
