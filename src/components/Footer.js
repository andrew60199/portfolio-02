import React from 'react'

export default function Footer() {
    return (
        <footer id="contact" className="contact">
            <h2>Let collaborate!</h2>
            <div className="ex-link">
                <p><strong>Email:</strong> andrew60199@gmail.com</p>
            </div>
            <a href="https://www.linkedin.com/in/andrew-beissmann/" target="_blank" rel="noopener noreferrer"> 
                <div className="ex-link">
                    <p><strong>Linkedin:</strong> Andrew Beissmann</p>
                </div>
            </a>
            <a href="https://github.com/andrew60199" target="_blank" rel="noopener noreferrer"> 
                <div className="ex-link">
                    <p><strong>GitHub:</strong> AND.evv</p>
                </div>
            </a>
            <a href="https://twitter.com/AndrewBeissmann" target="_blank" rel="noopener noreferrer"> 
                <div className="ex-link">
                    <p><strong>Twitter:</strong> @AndrewBeissmann</p>
                </div>
            </a>
        </footer>
    )
}