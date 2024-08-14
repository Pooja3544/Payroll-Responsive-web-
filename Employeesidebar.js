import React, { useState } from 'react';
import './Employeesidebar.css';

const Employeesidebar = ({ onButtonClick }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const handleEmployeeMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleEmployeeMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const touchDifference = touchStartX - touchEndX;
    const isSwipeLeft = touchDifference > 50;
    const isSwipeRight = touchDifference < -50;

    if (isSwipeLeft) {
      setDropdownVisible(true);
    }

    if (isSwipeRight) {
      setDropdownVisible(false);
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={`sidebar11 ${isDropdownVisible ? 'show-dropdown11' : ''}`}
      onMouseEnter={handleEmployeeMouseEnter}
      onMouseLeave={handleEmployeeMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="vertical-bar11">
        <img src="https://img.icons8.com/?size=100&id=qaDBSQJh1PHW&format=png&color=FFFFFF" alt="Leave House Icon" className="vertical-bar-icon11" />
        <img src="https://img.icons8.com/?size=100&id=7761&format=png&color=FFFFFF" alt="Collaboration Icon" className="vertical-bar-icon11" />
        <img src="https://img.icons8.com/?size=100&id=8951&format=png&color=FFFFFF" alt="Conference Icon" className="vertical-bar-icon11" />
        <img src="https://img.icons8.com/?size=100&id=34401&format=png&color=FFFFFF" alt="Cash In Hand Icon" className="vertical-bar-icon11" />
        <img src="https://img.icons8.com/?size=100&id=50897&format=png&color=FFFFFF" alt="Checked User Male Icon" className="vertical-bar-icon11" />
      </div>
      <div className="dropdown-content11">
        <button className="button44" onClick={() => onButtonClick('leave')}>Leave</button>
        <button className="button77" onClick={() => onButtonClick('salaryReports')}>Salary Reports</button>
      </div>
    </div>
  );
};

export default Employeesidebar;
