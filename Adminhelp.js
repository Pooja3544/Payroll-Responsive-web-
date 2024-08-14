import React, { useState, useEffect } from 'react';
import './Adminhelp.css'; // Import CSS file for styles
import { useNavigate } from 'react-router-dom';
import { IoHelpCircleOutline } from 'react-icons/io5';

const AdminHelp = () => {
    const navigate = useNavigate();
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);

    const handleBack = () => {
        navigate('/');
    };

    // Handle touch start
    const handleTouchStart = (e) => {
        setTouchStartX(e.targetTouches[0].clientX);
    };

    // Handle touch move
    const handleTouchMove = (e) => {
        setTouchEndX(e.targetTouches[0].clientX);
    };

    // Handle touch end
    const handleTouchEnd = () => {
        if (touchStartX && touchEndX) {
            const distance = touchStartX - touchEndX;
            if (distance > 50) {
                // Swipe left to navigate back
                handleBack();
            }
        }
        // Reset touch coordinates
        setTouchStartX(null);
        setTouchEndX(null);
    };

    useEffect(() => {
        // Adding touch event listeners to the help menu
        const helpMenuElement = document.querySelector('.help-menu');
        helpMenuElement.addEventListener('touchstart', handleTouchStart);
        helpMenuElement.addEventListener('touchmove', handleTouchMove);
        helpMenuElement.addEventListener('touchend', handleTouchEnd);

        // Clean up event listeners on component unmount
        return () => {
            helpMenuElement.removeEventListener('touchstart', handleTouchStart);
            helpMenuElement.removeEventListener('touchmove', handleTouchMove);
            helpMenuElement.removeEventListener('touchend', handleTouchEnd);
        };
    }, [touchStartX, touchEndX]);

    return (
        <div className="help-menu">
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
            
            <button className="btk-button" onClick={handleBack}>Back</button>
        </div>
    );
};

export default AdminHelp;
