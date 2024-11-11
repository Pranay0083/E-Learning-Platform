import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, User } from 'lucide-react';
import './Header.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin')
        ? localStorage.getItem('isLogin')
        : localStorage.getItem('isLogin') === 'true');
    const navigate = useNavigate();
    const location = useLocation();
    const headerRef = useRef(null);

    useEffect(() => {
        // Close the menu when the location changes (i.e., navigate to a different page)
        setIsMenuOpen(false);
    }, [location]);

    useEffect(() => {
        // Close the menu when clicking outside the header
        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="main-header" ref={headerRef}>
            <div className="header-container">
                <div className="logo-section">
                    <button
                        className="mobile-menu-button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <h1 onClick={() => navigate(0)}>THINK-BOX</h1>
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/">Home</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/instructors">Instructors</Link>
                    <Link to="/enrollments">Enrollments</Link>
                </nav>

                <div className="header-actions">
                    {/* <button aria-label="Search"> <Search size={20} /> </button> */}
                    <button aria-label="Account" 
                    onClick={() => isLogin ? navigate(`/profile/${localStorage.getItem('userID')}`) : navigate('/login')}
                    >
                        {/* onClick={()=>{navigate('/login')}} */}
                        <User size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
