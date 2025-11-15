import React from 'react';
import './FooterCom.css';
import { FaTelegram, FaInstagram, FaEnvelope } from 'react-icons/fa';

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

                    {/* Social Media Links */}
                    <div className="footer-socials">
                        <a href="https://t.me/medelame" target="_blank" rel="noopener noreferrer">
                            <FaTelegram />
                        </a>
                        <a href="mailto:lobarzabbarova@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope />
                        </a>

                        <a href="https://instagram.com/lobarsdiary" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
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
