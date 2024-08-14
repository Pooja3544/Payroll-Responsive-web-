import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Employeelogout.css';

const Logout = () => {
    const [logoutSuccess, setLogoutSuccess] = useState(false);
    const navigate = useNavigate();

    const handleConfirmLogout = () => {
        console.log('Logging out...'); // Placeholder for actual logout logic
        setLogoutSuccess(true);
        setTimeout(() => {
            navigate('/'); // Redirect to the home page after a delay
        }, 2000); // 2-second delay before redirecting
    };

    const handleTouchStart = (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
        this.touchEndX = e.changedTouches[0].screenX;
        if (this.touchEndX < this.touchStartX) {
            console.log('Swiped left to logout');
            handleConfirmLogout();
        }
        if (this.touchEndX > this.touchStartX) {
            console.log('Swiped right to cancel');
            navigate('/');
        }
    };

    return (
        <div
            className="logout-container"
            onTouchStart={handleTouchStart}
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
