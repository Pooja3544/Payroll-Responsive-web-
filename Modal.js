import React, { useEffect } from 'react';
import './Modal.css'; // CSS for styling the modal

const Modal = ({ message, onClose }) => {
    useEffect(() => {
        const handleTouchStart = (e) => {
            e.preventDefault();
        };

        const handleTouchMove = (e) => {
            e.preventDefault();
        };

        document.addEventListener('touchstart', handleTouchStart, { passive: false });
        document.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{message}</h2>
                <button className="abg" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
