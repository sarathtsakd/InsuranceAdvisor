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

    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSce2XV_sWxOwr68jXl7R-afyoV4hoCxJPTnF7Y9Yym3TRZQaw/formResponse';

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const formDataToSubmit = new FormData();
                formDataToSubmit.append('entry.2022569240', formData.name);
                formDataToSubmit.append('entry.1540516407', formData.phone);

                // Map the type to Google Form options
                let interestType = formData.type;
                if (formData.type === 'Term') interestType = 'Term Insurance';
                if (formData.type === 'Health') interestType = 'Health Insurance';

                formDataToSubmit.append('entry.61013560', interestType);

                await fetch(GOOGLE_FORM_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    body: formDataToSubmit
                });

                setSubmitted(true);
                setFormData({ name: '', phone: '', type: 'Term' });

                // Reset success message after 5 seconds
                setTimeout(() => setSubmitted(false), 5000);
            } catch (error) {
                console.error("Form submission error:", error);
                // Even if there's a network error, we might want to show an error message.
                // But with no-cors, we mostly just assume success if no network exception.
                alert("Something went wrong. Please try again later.");
            }
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
