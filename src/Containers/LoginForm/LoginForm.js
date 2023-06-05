import React, { useState } from 'react';
import "./LoginForm.scss"

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    
    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();

        // Perform basic validations
        const { email, password } = formData;
        const errors = {};
        if (!email) {
            errors.email = 'Please enter an email address';
        } else if (
            !email.includes('@') ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {
            errors.email = 'Please enter a valid email address';
        }
        if (!password) {
            errors.password = 'Please enter a password';
        }
        setFormErrors(errors);

        // Check for any errors
        if (Object.keys(errors).length > 0) {
            return;
        }

        // Display success message
        alert('You have successfully logged in!');
    }
    
    return (
        <div className='login-page'>
            <form onSubmit={handleSubmit} className="login-form">
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <p className="error">{formErrors.email}</p>}
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {formErrors.password && <p className="error">{formErrors.password}</p>}
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
