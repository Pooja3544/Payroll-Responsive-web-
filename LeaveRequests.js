import React, { useState } from 'react';
import { useLeave } from '../contexts/LeaveContext.js';
import './LeaveRequests.css';

const AdminDashboard = () => {
  const { leaveRequests, updateLeaveRequestStatus } = useLeave();
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleAccept = (index) => {
    updateLeaveRequestStatus(index, 'Accepted');
  };

  const handleReject = (index) => {
    updateLeaveRequestStatus(index, 'Rejected');
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (index) => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isSwipeLeft = distance > 50;
    const isSwipeRight = distance < -50;

    if (isSwipeLeft) {
      console.log('Swiped left to reject');
      handleReject(index);
    }

    if (isSwipeRight) {
      console.log('Swiped right to accept');
      handleAccept(index);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="admin-dashboard">
      <h2>Leave Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Type of Leave</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((request, index) => (
            <tr
              key={index}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => handleTouchEnd(index)}
            >
              <td>{request.leaveType}</td>
              <td>{request.leaveFromDate}</td>
              <td>{request.leaveToDate}</td>
              <td>{request.reason}</td>
              <td>{request.status}</td>
              <td>
                <button onClick={() => handleAccept(index)}>Accept</button>
                <button onClick={() => handleReject(index)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
