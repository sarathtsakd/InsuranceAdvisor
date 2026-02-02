import React, { useState } from 'react';

const LeadForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        type: 'Term'
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!formData.phone.trim()) {
            tempErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            tempErrors.phone = "Enter a valid 10-digit phone number";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Simulate API call
            console.log("Submitting form data:", formData);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
            setFormData({ name: '', phone: '', type: 'Term' });
        }
    };

    return (
        <section id="contact" className="section" style={{ background: 'var(--color-primary)', color: '#fff' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 className="section-title" style={{ color: '#fff' }}>Get Free Expert Guidance</h2>
                <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Fill the form below and our experts will help you choose the right plan. No spam, promised.
                </p>

                <div style={{
                    background: '#fff',
                    padding: '40px',
                    borderRadius: '15px',
                    width: '100%',
                    maxWidth: '500px',
                    color: 'var(--color-text)'
                }}>
                    {submitted ? (
                        <div style={{ textAlign: 'center', padding: '40px 0' }}>
                            <div style={{ color: 'var(--color-success)', fontSize: '4rem', marginBottom: '20px' }}>✓</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Request Received!</h3>
                            <p>We will contact you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-input"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    style={{ borderColor: errors.name ? 'red' : '#ddd' }}
                                />
                                {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="form-input"
                                    placeholder="e.g. 9876543210"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={{ borderColor: errors.phone ? 'red' : '#ddd' }}
                                />
                                {errors.phone && <small style={{ color: 'red' }}>{errors.phone}</small>}
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="type">Interested In</label>
                                <select
                                    id="type"
                                    name="type"
                                    className="form-select"
                                    value={formData.type}
                                    onChange={handleChange}
                                >
                                    <option value="Term">Term Insurance</option>
                                    <option value="Health">Health Insurance</option>
                                    <option value="Both">Both</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', background: 'var(--color-secondary)' }}>
                                Request Free Consultation
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LeadForm;
