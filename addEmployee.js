import React, { useState } from 'react';
import './addEmployee.css'; 

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Employee Added:', { name, email, position });
    
    setName('');
    setEmail('');
    setPosition('');
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
      // Add your logic here, e.g., navigate to the next step
    }

    if (isSwipeRight) {
      console.log('Swiped right');
      // Add your logic here, e.g., navigate to the previous step
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div 
      className="add-employee-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            className="add-employee-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="name" className="add-employee-label">Name</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            className="add-employee-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email" className="add-employee-label">Email</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="position"
            className="add-employee-input"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
          <label htmlFor="position" className="add-employee-label">Position</label>
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
