import React from 'react';
import { Link } from 'react-router-dom';
import './FooterCom.css';

const FooterCom = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Brand / Personal Info */}
                <div className="footer-brand">
                    <h2 className="footer-logo">LOBAR JABBOROVA</h2>
                    <p className="footer-description">
                        Media Student | Photographer & Illustrator | Creative Professional
                    </p>
                    <div className="footer-contact">
                        <p>Email: lobarzabbarova@gmail.com</p>
                        <p>Location: Tashkent, Shaykhontoxur</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="footer-links">
                    <div className="links-section">
                        <h3>Navigation</h3>
                        <ul>
                            <li><Link className="nav-link" to="/">Home</Link></li>
                            <li><Link className="nav-link" to="/about">About</Link></li>
                            <li><Link className="nav-link" to="/works">Works</Link></li>
                            <li><Link className="nav-link" to="/resume">Resume</Link></li>
                        </ul>
                    </div>

                    <div className="links-section">
                        <h3>Skills & Services</h3>
                        <ul>
                            <li>Teamwork & Leadership</li>
                            <li>Time Management</li>
                            <li>Creative Photography</li>
                            <li>Photo Editing (Photoshop)</li>
                            <li>Illustration & Drawing</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} LOBAR JABBOROVA.</p>
            </div>
        </footer>
    );
};

export default FooterCom;
