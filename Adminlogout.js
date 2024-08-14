import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoLogOutOutline } from 'react-icons/io5';
import './Adminlogout.css';

const Logout = () => {
    const [logoutSuccess, setLogoutSuccess] = useState(false);
    const navigate = useNavigate();
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);

    const handleConfirmLogout = () => {
        console.log('Logging out...');
        setLogoutSuccess(true);
        setTimeout(() => {
            navigate('/');
        }, 2000); // 2 second delay before redirecting
    };

    const handleTouchStart = (e) => {
        setTouchStartX(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEndX(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStartX && touchEndX) {
            const distance = touchStartX - touchEndX;
            if (distance > 50) {
                // Swipe left to confirm logout
                handleConfirmLogout();
            }
        }
        setTouchStartX(null);
        setTouchEndX(null);
    };

    return (
        <div 
            className="logout-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="logout-content">
                <h2 className='hgj'>Confirm Logout</h2>
                <p>Are you sure you want to logout?</p>
                <div className="button-container">
                    <button className="confirm-button" onClick={handleConfirmLogout}>
                        Logout
                    </button>
                    <button className="bck-button">
                        <Link to="/" className="link-button">Cancel</Link>
                    </button>
                </div>
                {logoutSuccess && <p className="logout-success">Logout successful!</p>}
            </div>
        </div>
    );
};

export default Logout;
