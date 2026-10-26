import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Mail, ShieldAlert, ShieldCheck } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Editorial Desk | CreatorTax India',
  description:
    'Get in touch with the CreatorTax India editorial desk for article suggestions, statutory corrections, and research feedback.',
  alternates: {
    canonical: 'https://creatortax.in/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="contact-page-layout">
      <div className="contact-page-inner">
        <Link href="/" className="back-link">
          <ArrowLeft size={16} /> Back to CreatorTax India
        </Link>

        <div className="contact-grid">
          {/* Left Column: Context, SLA, and Safety */}
          <div className="contact-info-pane">
            <span className="section-kicker">EDITORIAL CORRESPONDENCE</span>
            <h1>
              Have a question or correction?<br />
              <em>Let’s connect.</em>
            </h1>
            <p className="contact-lead">
              We welcome constructive feedback, suggestions for new guides, statutory updates, and
              clarifications from India’s freelance and creative community.
            </p>

            <div className="contact-sla-card">
              <div className="sla-row">
                <Clock size={18} className="sla-icon" />
                <div>
                  <strong>Response SLA: 24–48 Business Hours</strong>
                  <span>Our research desk reviews incoming correspondence Monday through Friday.</span>
                </div>
              </div>

              <div className="sla-row">
                <Mail size={18} className="sla-icon" />
                <div>
                  <strong>Direct Inquiries</strong>
                  <span>hello@creatortax.in (Editorial & Corrections)</span>
                </div>
              </div>
            </div>

            <div className="contact-safety-alert">
              <ShieldAlert size={20} />
              <div>
                <strong>Critical Security & Privacy Notice</strong>
                <p>
                  Please do <strong>NOT</strong> transmit sensitive personal tax documents — such as
                  your Permanent Account Number (PAN), Aadhaar, bank passbooks, Form 26AS, or portal
                  credentials. CreatorTax India will never request your passwords or OTPs.
                </p>
              </div>
            </div>

            <div className="contact-ca-note">
              <ShieldCheck size={18} />
              <p>
                <strong>Individual Tax Assistance:</strong> We publish educational manuals and tools
                freely. We do not provide individualized CA representation or private return-filing
                services. For custom audits, engage a practicing Chartered Accountant.
              </p>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="contact-form-pane">
            <div className="form-card-box">
              <div className="form-card-header">
                <h2>Direct Message to Research Desk</h2>
                <p>Fill out the details below and we will route your inquiry to the relevant tax editor.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
