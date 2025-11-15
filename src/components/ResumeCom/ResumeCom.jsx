import React from 'react';
import './ResumeCom.css';
import ResumePDF from '/public/CV (6).pdf'; // Add your PDF file here

const Resume = () => {
    return (
        <div className="resume-container">
            <div className="resume-frame">
                <header className="resume-header">
                    <h1 className="resume-name">LOBAR JABBOROVA</h1>
                    <div className="resume-contact">
                        <p>lobarzabbarova@gmail.com</p>
                        <p>Tashkent, Shaykhontoxur district</p>
                    </div>
                </header>

                <section className="resume-section">
                    <h2>PROFILE</h2>
                    <p>
                        A responsible person with strong communication skills with the ability
                        to collaborate effectively within a team. Committed to delivering
                        quality results.
                    </p>
                </section>

                <section className="resume-section">
                    <h2>EDUCATION</h2>
                    <p><strong>WEBSTER UNIVERSITY</strong></p>
                    <p>Bachelor of Arts in Media Studies: 2024-2028</p>
                    <p>GPA: 3.9 / 4.0</p>
                </section>

                <section className="resume-section">
                    <h2>SKILLS</h2>
                    <ul className="resume-skills">
                        <li>Teamwork</li>
                        <li>Time Management</li>
                        <li>Leadership</li>
                        <li>Effective Communication</li>
                        <li>Critical Thinking</li>
                    </ul>
                </section>

                <section className="resume-section">
                    <h2>LANGUAGES</h2>
                    <p>English (Fluent)</p>
                    <p>Uzbek (Fluent)</p>
                    <p>Russian (Fluent)</p>
                </section>

                <section className="resume-section">
                    <h2>ADDITIONAL</h2>
                    <p>Photoshop specialist</p>
                    <p>Professional photographer & videographer</p>
                    <p>
                        I create drawings using pencil, charcoal, and ink. My work focuses on detail,
                        texture, and emotion, often inspired by people, nature, and everyday life.
                    </p>
                    <p>
                        Specializing in portraits, events, and lifestyle photography, I aim to tell
                        visual stories. My approach combines creativity with technical skill resulting
                        in powerful images.
                    </p>
                    <p>
                        I specialize in photo editing using Adobe Photoshop. From color correction to
                        creative retouching, I enhance images with precision and care.
                    </p>
                </section>

                <div className="resume-download">
                    <a href={ResumePDF} download="Lobar_Jabborova_Resume.pdf">
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Resume;
