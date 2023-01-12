import React, {useState} from 'react';

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const validateEmail = (email) => {
        // Need to use a double \\ for \
        const re = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w+)+$/;
        return re.test(String(email).toLowerCase());
    }

    const handleGetInContact = (event) => {
        event.preventDefault()

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address')
        }

        console.log(`Dear Andrew, ${message}. From ${name} ${email}`)

        setErrorMessage('Unfortunately this application doesn\'t have backend to handle this request. Please send me an email if your genuinely interesting in reaching out.')

    }

    return (
        <section id="contact-form">
            <div className="work-2">
                <h2>Contact form coming soon... 📧</h2>
                <form onSubmit={handleGetInContact}>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' placeholder='Please enter your name' onChange={(event) => setName(event.target.value)} required/>
                    <label htmlFor='email'>Email:</label>
                    <input type='text' id='email' placeholder='Whats your email?' onChange={(event) => setEmail(event.target.value)} required/>
                    <label htmlFor='message'>Message:</label>
                    <textarea type='text' id='message' placeholder='Enter a message here' onChange={(event) => setMessage(event.target.value)} required></textarea>
                    <input type="submit" className="button-2" value='Get in contact'/>
                </form>
                {errorMessage && (
                    <p className="error-text">{errorMessage}</p>
                )}
            </div>
        </section>
        
    );
}