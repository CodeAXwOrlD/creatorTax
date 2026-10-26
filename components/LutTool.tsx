'use client';

import { useState } from 'react';
import {
  AlertTriangle,
  Check,
  Copy,
  FileCheck,
  Globe2,
  Info,
  Scale,
} from 'lucide-react';

export default function LutTool() {
  const [arn, setArn] = useState('AD290326008765A');
  const [lutDate, setLutDate] = useState('2026-03-28');
  const [copied, setCopied] = useState(false);

  // 5 Statutory Export Tests
  const [tests, setTests] = useState([
    { id: 'supplier', label: 'Supplier is located in India (You hold active PAN and GSTIN in India)', checked: true },
    { id: 'recipient', label: 'Recipient is located outside India (Your client or platform is registered abroad)', checked: true },
    { id: 'place', label: 'Place of supply is outside India (Deliverables consumed by foreign entity)', checked: true },
    { id: 'forex', label: 'Payment received in convertible foreign exchange (via bank remittance or FIRA)', checked: true },
    { id: 'distinct', label: 'Not merely establishments of distinct persons (You and client are separate legal entities)', checked: true },
  ]);

  // RFD-11 Filing Steps
  const [steps, setSteps] = useState([
    { id: 'step1', title: 'Sign in to gst.gov.in with valid credentials & captcha', done: true },
    { id: 'step2', title: 'Navigate to Services > User Services > Furnish Letter of Undertaking (LUT)', done: true },
    { id: 'step3', title: 'Select the upcoming Financial Year (e.g. 2026-2027) from dropdown', done: true },
    { id: 'step4', title: 'Check all three statutory declarations under Rule 96A', done: false },
    { id: 'step5', title: 'Provide full legal name, occupation, and address of two witnesses', done: false },
    { id: 'step6', title: 'Sign using Aadhaar OTP / EVC and immediately download the ARN acknowledgement', done: false },
  ]);

  const toggleTest = (idx: number) => {
    const updated = [...tests];
    updated[idx].checked = !updated[idx].checked;
    setTests(updated);
  };

  const toggleStep = (idx: number) => {
    const updated = [...steps];
    updated[idx].done = !updated[idx].done;
    setSteps(updated);
  };

  const allTestsPassed = tests.every((t) => t.checked);
  const stepsDoneCount = steps.filter((s) => s.done).length;

  const invoiceSnippet = `SUPPLY MEANT FOR EXPORT OF SERVICES UNDER LETTER OF UNDERTAKING WITHOUT PAYMENT OF INTEGRATED TAX (LUT ARN: ${arn || '[ENTER ARN]'} DATED ${lutDate || '[ENTER DATE]'}).`;

  const copySnippet = () => {
    navigator.clipboard.writeText(invoiceSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="lut-tool-container">
      {/* 5-Point Statutory Export Tests */}
      <div className="lut-card">
        <div className="lut-card-header">
          <div className="card-title-group">
            <Scale size={20} className="title-icon" />
            <div>
              <h3>Part 1: The 5 Statutory Tests for &quot;Export of Services&quot;</h3>
              <p>Section 2(6) of the Integrated Goods and Services Tax (IGST) Act, 2017</p>
            </div>
          </div>
          <span className={`status-pill ${allTestsPassed ? 'status-pass' : 'status-warn'}`}>
            {allTestsPassed ? 'ALL 5 CONDITIONS MET' : 'ACTION REQUIRED'}
          </span>
        </div>

        <div className="checklist-items">
          {tests.map((test, idx) => (
            <label key={test.id} className="checklist-row">
              <input
                type="checkbox"
                checked={test.checked}
                onChange={() => toggleTest(idx)}
                className="checklist-checkbox"
              />
              <span className="checklist-text">{test.label}</span>
            </label>
          ))}
        </div>

        {!allTestsPassed && (
          <div className="checklist-warning-box">
            <AlertTriangle size={18} />
            <span>
              If any of these five conditions fails, the transaction is treated as a domestic supply and is
              subject to 18% GST. Review your client agreement to ensure all criteria are satisfied.
            </span>
          </div>
        )}
      </div>

      {/* RFD-11 Filing Steps Tracker */}
      <div className="lut-card">
        <div className="lut-card-header">
          <div className="card-title-group">
            <FileCheck size={20} className="title-icon" />
            <div>
              <h3>Part 2: Form GST RFD-11 Online Filing Steps</h3>
              <p>Track your submission on services.gst.gov.in before the financial year begins</p>
            </div>
          </div>
          <span className="progress-counter">
            {stepsDoneCount} of {steps.length} Steps Completed
          </span>
        </div>

        <div className="steps-tracker-list">
          {steps.map((st, idx) => (
            <div
              key={st.id}
              className={`step-tracker-item ${st.done ? 'step-completed' : ''}`}
              onClick={() => toggleStep(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') toggleStep(idx);
              }}
            >
              <div className="step-checkbox-box">
                {st.done ? <Check size={16} /> : <span>{idx + 1}</span>}
              </div>
              <div className="step-tracker-title">{st.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mandatory Export Invoice Text Generator */}
      <div className="lut-card generator-card">
        <div className="lut-card-header">
          <div className="card-title-group">
            <Globe2 size={20} className="title-icon" />
            <div>
              <h3>Part 3: Mandatory Export Invoice Header Generator</h3>
              <p>Every zero-rated international invoice must legally cite this statutory text</p>
            </div>
          </div>
          <span className="badge-legal">RULE 96A MANDATORY</span>
        </div>

        <div className="generator-inputs-grid">
          <div className="gen-field">
            <label htmlFor="arn-input" className="field-label">
              LUT ARN (Application Reference Number)
            </label>
            <input
              id="arn-input"
              type="text"
              className="form-input mono-font"
              value={arn}
              placeholder="AD290326008765A"
              onChange={(e) => setArn(e.target.value.toUpperCase())}
            />
          </div>

          <div className="gen-field">
            <label htmlFor="lut-date-input" className="field-label">
              LUT Filing / Approval Date
            </label>
            <input
              id="lut-date-input"
              type="date"
              className="form-input mono-font"
              value={lutDate}
              onChange={(e) => setLutDate(e.target.value)}
            />
          </div>
        </div>

        <div className="snippet-display-box">
          <div className="snippet-text">{invoiceSnippet}</div>
          <button
            type="button"
            className={`copy-snippet-btn ${copied ? 'copied-btn' : ''}`}
            onClick={copySnippet}
          >
            {copied ? (
              <>
                <Check size={14} /> <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy size={14} /> <span>Copy Invoice Text</span>
              </>
            )}
          </button>
        </div>

        <div className="snippet-hint-note">
          <Info size={15} />
          <span>
            Paste this line into the header or footer of invoices issued to clients in the US, UK, EU, or
            any overseas country. In GSTR-1, report under Table 6A as &quot;Export Without Payment of Tax&quot;.
          </span>
        </div>
      </div>
    </div>
  );
}
