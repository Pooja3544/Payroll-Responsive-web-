import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './Employee.css';
import EmployeeNavBar from '../Employee/EmployeeNavbar';
import Employeesidebar from './Employeesidebar';
import LeaveApplication from './LeaveApplication';
import SalaryReport from '../SalaryReport';
import ImageSlider from '../ImageSlider';
import MyProfile from './Myprofile';
import EmployeeResignation from './EmployeeResignation';
import EmployeeSetting from './EmployeeSetting';
import Employeehelp from './Employeehelp';
import Employeelogout from './Employeelogout';
import RaiseTicket from './Employee Tickets/Raiseticket';
import Myticket from './Employee Tickets/Myticket';

const Employee = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [tickets, setTickets] = useState([]);

  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  const addTicket = (ticket) => {
    setTickets([...tickets, ticket]);
  };

  const handleTouchStart = (e) => {
    // Handle touch start event
  };

  const handleTouchMove = (e) => {
    // Handle touch move event
  };

  const handleTouchEnd = (e) => {
    // Handle touch end event
  };

  return (
    <main onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <EmployeeNavBar onButtonClick={handleButtonClick} />
      <ImageSlider />
      <div className="employee-page">
        <Employeesidebar onButtonClick={handleButtonClick} />
        <div className="content">
          <Routes>
            <Route path="/leave-application" element={<LeaveApplication />} />
            <Route path="/salary-reports" element={<SalaryReport />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/employeeresignation" element={<EmployeeResignation />} />
            <Route path="/employeesetting" element={<EmployeeSetting />} />
            <Route path="/employeehelp" element={<Employeehelp />} />
            <Route path="/employeelogout" element={<Employeelogout />} />
            <Route path="/raiseticket" element={<RaiseTicket addTicket={addTicket} />} />
            <Route path="/myticket" element={<Myticket tickets={tickets} />} />
            <Route path="/" element={
              <div>
                {/* Add the relevant components here */}
              </div>
            } />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default Employee;
