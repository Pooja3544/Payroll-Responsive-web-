import React, { useState, useEffect } from 'react';
import './Employeehelp.css'; // Import CSS file for styles
import { useNavigate } from 'react-router-dom';

const Help = () => {
    const navigate = useNavigate();
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleBack = () => {
        navigate('/');
    };

    const handleTouchStart = (e) => {
        console.log('Touch start:', e.touches);
    };

    const handleTouchMove = (e) => {
        console.log('Touch move:', e.touches);
    };

    const handleTouchEnd = (e) => {
        console.log('Touch end:', e.changedTouches);
    };

    return (
        <div
            className={`help-menu ${screenSize < 600 ? 'small-screen' : screenSize < 1024 ? 'medium-screen' : 'large-screen'}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <h2 className='rfr'>Help Menu</h2>
            <p>Contact Information:</p>
            <div className="contact-info">
                <ul>
                    <li>Company Email: company@example.com</li>
                    <li>HR Email: hr@example.com</li>
                    <li>Manager Email: manager@example.com</li>
                    <li>Team Leader Email: teamleader@example.com</li>
                </ul>
            </div>
            <button className="btk-button" onClick={handleBack}>back</button>
        </div>
    );
};

export default Help;
