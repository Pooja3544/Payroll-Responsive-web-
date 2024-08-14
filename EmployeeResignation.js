import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployeeResignation.css';

function EmployeeResignation() {
  const [name, setName] = useState('');
  const [Id, setId] = useState('');
  const [department, setDepartment] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [entryDate, setEntryDate] = useState('');
  const [scheduledDepartureDate, setScheduledDepartureDate] = useState('');
  const [postEmploymentOccupation, setPostEmploymentOccupation] = useState('');
  const [reasonForLeaving, setReasonForLeaving] = useState('');
  const [remarks, setRemarks] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="employee-resignation-container">
      {!submitted ? (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2 className='opx'>Resignation Application Form</h2>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="Id">Id Card number:</label>
              <input
                type="text"
                id="Id"
                value={Id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="department">Department:</label>
              <input
                type="text"
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="jobTitle">Job Title:</label>
              <input
                type="text"
                id="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="entryDate">Entry Date:</label>
              <input
                type="date"
                id="entryDate"
                value={entryDate}
                onChange={(e) => setEntryDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="scheduledDepartureDate">Scheduled Departure Date:</label>
              <input
                type="date"
                id="scheduledDepartureDate"
                value={scheduledDepartureDate}
                onChange={(e) => setScheduledDepartureDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="postEmploymentOccupation">Post-employment Occupation:</label>
              <input
                type="text"
                id="postEmploymentOccupation"
                value={postEmploymentOccupation}
                onChange={(e) => setPostEmploymentOccupation(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="reasonForLeaving">Reason for Leaving:</label>
              <textarea
                id="reasonForLeaving"
                value={reasonForLeaving}
                onChange={(e) => setReasonForLeaving(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="remarks">Remarks:</label>
              <textarea
                id="remarks"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                required
              />
            </div>
            <div className="form-buttons">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="success-page show">
          <div className="success-content">
            <h2 className='afg'>Submission Successful!</h2>
            <p>Your resignation application has been submitted.</p>
            <div className='ss'>
              <button className="bbk-button" onClick={handleBack}>
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeResignation;
