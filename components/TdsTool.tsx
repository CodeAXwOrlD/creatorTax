'use client';

import { useMemo, useState } from 'react';
import {
  AlertCircle,
  Building2,
  CheckSquare,
  Clock,
  Plus,
  Trash2,
} from 'lucide-react';

const formatINR = (val: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(val)));

interface ClientTdsEntry {
  id: string;
  clientName: string;
  billedAmount: number;
  tdsSection: '194J-10' | '194J-2' | '194C-1';
  in26AS: boolean;
}

export default function TdsTool() {
  const [entries, setEntries] = useState<ClientTdsEntry[]>([
    { id: '1', clientName: 'Fintech Studio Pvt Ltd', billedAmount: 300000, tdsSection: '194J-10', in26AS: true },
    { id: '2', clientName: 'Growth Agency LLP', billedAmount: 180000, tdsSection: '194J-10', in26AS: true },
    { id: '3', clientName: 'EdTech Brand Productions', billedAmount: 120000, tdsSection: '194C-1', in26AS: false },
  ]);

  const [refundMonthsDelay, setRefundMonthsDelay] = useState(6);

  // Bank Pre-Validation Checklist
  const [bankChecks, setBankChecks] = useState([
    { id: 'pan', label: 'PAN linked to Bank Account (matching name on PAN card and bank passbook)', checked: true },
    { id: 'preval', label: 'Bank status shows "Pre-Validated" on incometax.gov.in portal', checked: true },
    { id: 'evc', label: 'EVC (Electronic Verification Code) enabled for instant return verification', checked: true },
    { id: 'nominate', label: 'Account explicitly marked as "Nominated for Refund"', checked: true },
  ]);

  const addEntry = () => {
    const newId = String(Date.now());
    setEntries([
      ...entries,
      { id: newId, clientName: 'New Domestic Client', billedAmount: 100000, tdsSection: '194J-10', in26AS: false },
    ]);
  };

  const removeEntry = (id: string) => {
    setEntries(entries.filter((e) => e.id !== id));
  };

  const updateEntry = <K extends keyof ClientTdsEntry>(id: string, field: K, val: ClientTdsEntry[K]) => {
    setEntries(
      entries.map((e) => {
        if (e.id === id) return { ...e, [field]: val };
        return e;
      })
    );
  };

  const toggleBankCheck = (idx: number) => {
    const updated = [...bankChecks];
    updated[idx].checked = !updated[idx].checked;
    setBankChecks(updated);
  };

  // Calculations
  const totalBilled = entries.reduce((acc, curr) => acc + curr.billedAmount, 0);

  const totalTdsDeducted = entries.reduce((acc, curr) => {
    const rate = curr.tdsSection === '194J-10' ? 0.1 : curr.tdsSection === '194J-2' ? 0.02 : 0.01;
    return acc + curr.billedAmount * rate;
  }, 0);

  const verifiedTdsIn26as = entries
    .filter((e) => e.in26AS)
    .reduce((acc, curr) => {
      const rate = curr.tdsSection === '194J-10' ? 0.1 : curr.tdsSection === '194J-2' ? 0.02 : 0.01;
      return acc + curr.billedAmount * rate;
    }, 0);

  const missingTdsCredit = totalTdsDeducted - verifiedTdsIn26as;

  // Section 244A statutory interest: 0.5% per month on refund
  const statutoryInterest = useMemo(() => {
    return Math.round(verifiedTdsIn26as * 0.005 * refundMonthsDelay);
  }, [verifiedTdsIn26as, refundMonthsDelay]);

  const allBankChecksPassed = bankChecks.every((b) => b.checked);

  return (
    <div className="tds-tool-container">
      {/* Client TDS Entry Ledger */}
      <div className="tds-card">
        <div className="tds-card-header">
          <div className="card-title-group">
            <Building2 size={20} className="title-icon" />
            <div>
              <h3>Client TDS Deductions Ledger</h3>
              <p>Itemize taxes withheld by Indian domestic clients during the financial year</p>
            </div>
          </div>
          <button type="button" className="add-entry-btn" onClick={addEntry}>
            <Plus size={14} /> Add Client Entry
          </button>
        </div>

        <div className="tds-table-wrap">
          <table className="tds-ledger-table">
            <thead>
              <tr>
                <th>CLIENT / DEDUCTOR NAME</th>
                <th>GROSS BILLING (₹)</th>
                <th>TDS SECTION</th>
                <th>WITHHELD TDS (₹)</th>
                <th>REFLECTS IN 26AS?</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => {
                const rate = entry.tdsSection === '194J-10' ? 0.1 : entry.tdsSection === '194J-2' ? 0.02 : 0.01;
                const entryTds = entry.billedAmount * rate;
                return (
                  <tr key={entry.id}>
                    <td>
                      <input
                        type="text"
                        className="table-input"
                        value={entry.clientName}
                        onChange={(e) => updateEntry(entry.id, 'clientName', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="10000"
                        className="table-input mono-font"
                        value={entry.billedAmount}
                        onChange={(e) => updateEntry(entry.id, 'billedAmount', Math.max(0, Number(e.target.value) || 0))}
                      />
                    </td>
                    <td>
                      <select
                        className="table-select"
                        value={entry.tdsSection}
                        onChange={(e) => updateEntry(entry.id, 'tdsSection', e.target.value as ClientTdsEntry['tdsSection'])}
                      >
                        <option value="194J-10">Sec 194J (10% Professional)</option>
                        <option value="194J-2">Sec 194J (2% Technical)</option>
                        <option value="194C-1">Sec 194C (1% Contractor)</option>
                      </select>
                    </td>
                    <td className="mono-font strong-cell">{formatINR(entryTds)}</td>
                    <td>
                      <label className="switch-label">
                        <input
                          type="checkbox"
                          checked={entry.in26AS}
                          onChange={(e) => updateEntry(entry.id, 'in26AS', e.target.checked)}
                        />
                        <span className={entry.in26AS ? 'badge-verified' : 'badge-unverified'}>
                          {entry.in26AS ? 'Verified in 26AS' : 'Missing / Unpaid'}
                        </span>
                      </label>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="delete-row-btn"
                        onClick={() => removeEntry(entry.id)}
                        aria-label="Delete entry"
                      >
                        <Trash2 size={15} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Tally Summary Bar */}
        <div className="tds-tally-bar">
          <div>
            <span>Total Gross Invoiced:</span>
            <strong>{formatINR(totalBilled)}</strong>
          </div>
          <div>
            <span>Total TDS Deducted:</span>
            <strong>{formatINR(totalTdsDeducted)}</strong>
          </div>
          <div>
            <span>Verified in Form 26AS:</span>
            <strong className="verified-text">{formatINR(verifiedTdsIn26as)}</strong>
          </div>
          {missingTdsCredit > 0 && (
            <div>
              <span>Missing from 26AS:</span>
              <strong className="warn-text">{formatINR(missingTdsCredit)}</strong>
            </div>
          )}
        </div>

        {missingTdsCredit > 0 && (
          <div className="tds-warning-card">
            <AlertCircle size={18} />
            <span>
              <strong>{formatINR(missingTdsCredit)}</strong> in TDS credits has not yet reflected in your Form 26AS.
              Contact the deductor&apos;s finance team to confirm that they filed their quarterly Form 26Q return with
              your exact PAN. You cannot claim tax credits in your ITR until they appear in 26AS.
            </span>
          </div>
        )}
      </div>

      {/* Pre-Validation Checklist */}
      <div className="tds-card">
        <div className="tds-card-header">
          <div className="card-title-group">
            <CheckSquare size={20} className="title-icon" />
            <div>
              <h3>Bank Account Pre-Validation Checklist</h3>
              <p>Ensure your bank is ready to receive electronic refund dispatch via NACH</p>
            </div>
          </div>
          <span className={`status-pill ${allBankChecksPassed ? 'status-pass' : 'status-warn'}`}>
            {allBankChecksPassed ? 'BANK READY FOR REFUND' : 'ACTION REQUIRED'}
          </span>
        </div>

        <div className="checklist-items">
          {bankChecks.map((b, idx) => (
            <label key={b.id} className="checklist-row">
              <input
                type="checkbox"
                checked={b.checked}
                onChange={() => toggleBankCheck(idx)}
                className="checklist-checkbox"
              />
              <span className="checklist-text">{b.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Section 244A Statutory Interest Calculator */}
      <div className="tds-card interest-card">
        <div className="tds-card-header">
          <div className="card-title-group">
            <Clock size={20} className="title-icon" />
            <div>
              <h3>Section 244A: Statutory Interest on Delayed Refunds</h3>
              <p>The Income Tax Department pays 0.5% simple interest per month (6% p.a.) on refund balances</p>
            </div>
          </div>
          <span className="badge-legal">0.5% PER MONTH</span>
        </div>

        <div className="interest-calc-row">
          <div className="interest-slider-col">
            <label className="field-label">Estimated Months from April 1st to Refund Dispatch:</label>
            <div className="slider-control-row">
              <input
                type="range"
                min="1"
                max="18"
                value={refundMonthsDelay}
                onChange={(e) => setRefundMonthsDelay(Number(e.target.value))}
                className="range-slider"
              />
              <span className="slider-val-badge">{refundMonthsDelay} Months</span>
            </div>
            <span className="field-hint">
              Refund interest is calculated from April 1st of the Assessment Year until the date the refund is granted,
              provided the ITR was filed on or before July 31st.
            </span>
          </div>

          <div className="interest-result-col">
            <div className="interest-result-card">
              <span>Potential Section 244A Interest:</span>
              <strong>+ {formatINR(statutoryInterest)}</strong>
              <small>Total Estimated Refund: {formatINR(verifiedTdsIn26as + statutoryInterest)}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
