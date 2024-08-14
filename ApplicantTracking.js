import React, { useState, useRef } from 'react';
import './ApplicantTracking.css';

const ApplicantTracking = () => {
    const [applicants, setApplicants] = useState([
        { id: 1, name: 'Alice', status: 'Interview Scheduled' },
        { id: 2, name: 'Bob', status: 'Application Received' },
    ]);

    const containerRef = useRef(null);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 150) {
            // Swiped left
            handleBack();
        }
        if (touchStart - touchEnd < -150) {
            // Swiped right
            scrollToTop();
        }
    };

    const scrollToTop = () => {
        if (containerRef.current) {
            containerRef.current.scrollTop = 0;
        }
    };

    const handleBack = () => {
        window.history.back();
    };

    return (
        <div
            className="applicant-tracking-container"
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <h2>Applicant Tracking</h2>
            <ul className="applicant-list">
                {applicants.map((applicant) => (
                    <li key={applicant.id} className="applicant-item">
                        <h3>{applicant.name}</h3>
                        <p>Status: {applicant.status}</p>
                    </li>
                ))}
            </ul>
            <div className="back-button-container">
                <button onClick={handleBack} className="bpk-button">Back</button>
            </div>
        </div>
    );
};

export default ApplicantTracking;
