import React from 'react';

const Comparison = () => {
    return (
        <section id="compare" className="section">
            <div className="container">
                <h2 className="section-title">Term vs Health Insurance</h2>
                <div style={{ overflowX: 'auto', marginTop: '40px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px', background: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                        <thead>
                            <tr style={{ background: 'var(--color-primary)', color: '#fff' }}>
                                <th style={{ padding: '20px', textAlign: 'left', width: '30%' }}>Feature</th>
                                <th style={{ padding: '20px', textAlign: 'left', width: '35%', background: '#142d45' }}>Term Insurance</th>
                                <th style={{ padding: '20px', textAlign: 'left', width: '35%' }}>Health Insurance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Row 1 */}
                            <tr style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '20px', fontWeight: '600' }}>Purpose</td>
                                <td style={{ padding: '20px' }}>Financial protection for family after death.</td>
                                <td style={{ padding: '20px' }}>Covers medical costs during lifetime.</td>
                            </tr>
                            {/* Row 2 */}
                            <tr style={{ borderBottom: '1px solid #eee', background: '#f9f9f9' }}>
                                <td style={{ padding: '20px', fontWeight: '600' }}>Payout</td>
                                <td style={{ padding: '20px' }}>Lump sum amount to nominee.</td>
                                <td style={{ padding: '20px' }}>Reimbursement of bills or cashless hospital payment.</td>
                            </tr>
                            {/* Row 3 */}
                            <tr style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '20px', fontWeight: '600' }}>Benefit Receiver</td>
                                <td style={{ padding: '20px' }}>Nominee / Family.</td>
                                <td style={{ padding: '20px' }}>Policyholder (You) & Family members.</td>
                            </tr>
                            {/* Row 4 */}
                            <tr style={{ borderBottom: '1px solid #eee', background: '#f9f9f9' }}>
                                <td style={{ padding: '20px', fontWeight: '600' }}>Premium vs Cover</td>
                                <td style={{ padding: '20px' }}>Low premium, very high coverage (e.g., 1Cr cover for ₹10k/yr).</td>
                                <td style={{ padding: '20px' }}>Higher premium relative to cover (e.g., 10L cover for ₹15k/yr).</td>
                            </tr>
                            {/* Row 5 */}
                            <tr>
                                <td style={{ padding: '20px', fontWeight: '600' }}>Tax Benefit</td>
                                <td style={{ padding: '20px' }}>Section 80C (Up to ₹1.5L)</td>
                                <td style={{ padding: '20px' }}>Section 80D (₹25k - ₹75k)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
