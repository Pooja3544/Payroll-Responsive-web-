import React, { useState } from 'react';
import './admin.css';
import NavBar from './Navbar';
import SideBar from './sidebar';
import AddEmployee from './addEmployee';
import SalaryReport from './SalaryReport.js';
import LeaveRequests from './LeaveRequests.js';
import ImageSlider from './ImageSlider.js';
import AdminProfile from './AdminProfile/Adminprofile.js';
import AdminResignation from './AdminProfile/AdminResignation.js';
import AdminSettings from './AdminProfile/AdminSettings.js';
import Adminhelp from './AdminProfile/Adminhelp.js';
import Adminlogout from './AdminProfile/Adminlogout.js';
import InterviewScheduling from './Recruitment/InterviewScheduling.js';
import ApplicantTracking from './Recruitment/ApplicantTracking.js';

const Admin = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isSwipeLeft = distance > 50;
    const isSwipeRight = distance < -50;

    if (isSwipeLeft) {
      console.log('Swiped left');
      // Add logic for swiping left (e.g., navigate to the next component)
    }

    if (isSwipeRight) {
      console.log('Swiped right');
      // Add logic for swiping right (e.g., navigate to the previous component)
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <main onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <NavBar onButtonClick={handleButtonClick} />
      <ImageSlider />
      <div className="home-page">
        <SideBar onButtonClick={handleButtonClick} />
        <div className="content">
          <div className={`component ${selectedComponent === 'addEmployee' ? 'slide-in' : ''}`}>
            {selectedComponent === 'addEmployee' && <AddEmployee />}
          </div>
          <div className={`component ${selectedComponent === 'viewLeaveRequest' ? 'slide-in' : ''}`}>
            {selectedComponent === 'viewLeaveRequest' && <LeaveRequests />}
          </div>
          <div className={`component ${selectedComponent === 'salaryReports' ? 'slide-in' : ''}`}>
            {selectedComponent === 'salaryReports' && <SalaryReport />}
          </div>
          <div className={`component ${selectedComponent === 'adminprofile' ? 'slide-in' : ''}`}>
            {selectedComponent === 'adminprofile' && <AdminProfile />}
          </div>
          <div className={`component ${selectedComponent === 'adminresignation' ? 'slide-in' : ''}`}>
            {selectedComponent === 'adminresignation' && <AdminResignation />}
          </div>
          <div className={`component ${selectedComponent === 'adminsettings' ? 'slide-in' : ''}`}>
            {selectedComponent === 'adminsettings' && <AdminSettings />}
          </div>
          <div className={`component ${selectedComponent === 'adminhelp' ? 'slide-in' : ''}`}>
            {selectedComponent === 'adminhelp' && <Adminhelp />}
          </div>
          <div className={`component ${selectedComponent === 'adminlogout' ? 'slide-in' : ''}`}>
            {selectedComponent === 'adminlogout' && <Adminlogout />}
          </div>
          <div className={`component ${selectedComponent === 'interviewscheduling' ? 'slide-in' : ''}`}>
            {selectedComponent === 'interviewscheduling' && <InterviewScheduling />}
          </div>
          <div className={`component ${selectedComponent === 'applicanttracking' ? 'slide-in' : ''}`}>
            {selectedComponent === 'applicanttracking' && <ApplicantTracking />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Admin;