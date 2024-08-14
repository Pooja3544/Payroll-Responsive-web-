import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';
import img1 from './assets/S.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login');
  };

  const handleEmployeeLoginClick = () => {
    navigate('/Employeelogin');
  };

  const handleTouchStart = (e) => {
    console.log('Touch start', e.touches);
  };

  const handleTouchMove = (e) => {
    console.log('Touch move', e.touches);
  };

  const handleTouchEnd = (e) => {
    console.log('Touch end', e.changedTouches);
  };

  return (
    <main onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <div className="home-page">
        <div className="logo-container">
          <img src={img1} alt="Company Logo" className="logo" />
        </div>
        <h1 className='h1'>WELCOME TO SYLIQON SOFTWARE MANAGEMENT</h1>
        <div>
          <button className="button1" onClick={handleButtonClick}>LOGIN as Admin</button>
        </div>
        <div>
          <button className="button2" onClick={handleEmployeeLoginClick}>LOGIN as Employee</button>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
