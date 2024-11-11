import React from 'react';
import { Mail, Github, Twitter, Linkedin, } from 'lucide-react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>We create amazing experiences that help students grow and succeed in the real world.</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                        <li><Link href="/support">Support</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <ul>
                        <li>123 Tech Street</li>
                        <li>Silicon Valley, CA 94025</li>
                        <li>contact@example.com</li>
                        <li>+1 (555) 123-4567</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <Link href="#" aria-label="Github"><Github size={20} /></Link>
                        <Link href="#" aria-label="Twitter"><Twitter size={20} /></Link>
                        <Link href="#" aria-label="LinkedIn"><Linkedin size={20} /></Link>
                        <Link href="#" aria-label="Email"><Mail size={20} /></Link>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Think-Box. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;