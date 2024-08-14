import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import './Employeelogin.css';
import googleLogo from '../../assets/icons8-google-logo-48.png';
import yourLogo from '../../assets/image (2).png';

const EmployeeLoginPage = () => {
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

  const handleLoginSuccess = (response) => {
    console.log('Custom Login Success:', response);
    navigate('/employee');
  };

  const handleLoginFailure = (response) => {
    console.log('Custom Login Failed:', response);
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
      className={`custom-login-page ${screenSize < 600 ? 'small-screen' : screenSize < 1024 ? 'medium-screen' : 'large-screen'}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="custom-login-container">
        <form className="custom-login-form">
          <div className="custom-form-logo">
            <img src={yourLogo} alt="Your Logo" className="custom-your-logo" />
          </div>
          <h2>Custom Login</h2>
          <div className="custom-form-group">
            <label htmlFor="email" className="custom-label">Email:</label>
            <input type="email" id="email" name="email" required className="custom-input" />
          </div>
          <div className="custom-form-group">
            <label htmlFor="password" className="custom-label">Password:</label>
            <input type="password" id="password" name="password" required className="custom-input" />
          </div>
          <button type="button" className="custom-forgot-password-button">Forgot password?</button>
          <button type="submit" className="custom-sign-in-button">Login</button>
          <div className="custom-button-group">
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginFailure}
              cookiePolicy={'single_host_origin'}
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="custom-google">
                  <img src={googleLogo} alt="Google Logo" className="custom-google-logo" />
                  Sign in with Google
                </button>
              )}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeLoginPage;
