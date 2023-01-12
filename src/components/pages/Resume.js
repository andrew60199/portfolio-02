import React from 'react';
// import ResumeDoc from './public/assets/files/Andrew_Beissmann_CV'

export default function Resume() {
    return (
        <a href='./assets/files/Andrew_Beissmann_CV.pdf' download="Andrew_Beissmann_CV">
            <button id="about" className="about">
                <div className="content">
                    <div className="text">
                        <h2>Resume 📃</h2>
                        <p>Click here to download my resume.</p>
                    </div>
                </div>
            </button>  
        </a>

    );
}