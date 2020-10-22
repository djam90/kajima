import React from 'react';
import './Booking.css'

function Booking({booking, spaces}) {

  function getSpaceNameById(id) {
    if (! spaces.length) return;

    return spaces.find(s => s.id === id).name;
  }

  return (
    <div className="Booking">
      <div>
        {booking.description}
      </div>

      <div>
        {booking.start_date}
      </div>

      <div>
        {booking.end_date}
      </div>

      <div>
        {getSpaceNameById(booking.space_id)}
      </div>

    </div>
  );
}

export default Booking;
