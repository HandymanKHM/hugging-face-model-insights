import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !email || !message) {
            setFeedback('Please fill in all required fields.');
            return;
        }

        if (!validateEmail(email)) {
            setFeedback('Please enter a valid email address.');
            return;
        }

        // Simulate form submission (In a real application, you would send the data to a server)
        setFeedback(`Thank you, ${name}! We have received your email: ${email}`);
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    return (
        <div>
            <header>
                <h1>Hugging Face Model Insights</h1>
            </header>
            <main>
                <section>
                    <p>Explore the full extent of what is optimally possible to create, build, make, compile, use, and get out of models on Hugging Face.</p>
                </section>
                <section>
                    <form onSubmit={handleSubmit} aria-labelledby="formLabel">
                        <fieldset>
                            <legend id="formLabel">Get in Touch</legend>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                aria-required="true"
                                aria-label="Name"
                            />
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                aria-required="true"
                                aria-label="Email"
                            />
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                aria-required="true"
                                aria-label="Message"
                            ></textarea>
                            <button type="submit">Submit</button>
                        </fieldset>
                    </form>
                    <div id="feedback" aria-live="polite" role="alert">
                        {feedback}
                    </div>
                </section>
            </main>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
