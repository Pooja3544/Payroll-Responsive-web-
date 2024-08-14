import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Myticket.css';
import { IoTicketOutline } from 'react-icons/io5';

const Myticket = ({ tickets }) => {
  const ticketsContainerRef = useRef(null);

  // Define state variables for touch events
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const scrollToTop = () => {
    if (ticketsContainerRef.current) {
      ticketsContainerRef.current.scrollTop = 0;
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      // Swiped left
      console.log('Swiped left');
    }
    if (touchStart - touchEnd < -150) {
      // Swiped right
      scrollToTop();
    }
  };

  return (
    <div
      className="my-tickets"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <h1>My Tickets</h1>
      <p className='sds'>Total Tickets: {tickets.length}</p>
      <div className="tickets-container" ref={ticketsContainerRef}>
        {tickets.map((ticket) => (
          <div className="ticket-card" key={ticket.id}>
            <p><strong>ID:</strong> {ticket.id}</p>
            <p><strong>Support Team:</strong> {ticket.supportTeam}</p>
            <p><strong>Reason:</strong> {ticket.reason}</p>
            <p><strong>Priority:</strong> {ticket.priority}</p>
            <p><strong>Description:</strong> {ticket.description}</p>
            <p>
              <strong>Attachment:</strong>{' '}
              {ticket.attachment && (
                <a href={`path/to/attachments/${ticket.attachment}`} download>
                  {ticket.attachment}
                </a>
              )}
            </p>
          </div>
        ))}
      </div>
      <Link to="/">
        <button className="ba-button">Back</button>
      </Link>
    </div>
  );
};

export default Myticket;
