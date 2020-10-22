import React, {useEffect, useState} from 'react';
import Booking from './Booking'
import './Bookings.css'

function Bookings({bookings, spaces}) {

  const [selectedOption, setSelectedOption] = useState("");

  function onChangeSpace(spaceId) {
    setSelectedOption(spaceId)
  }

  useEffect(() => {
  }, [selectedOption])

  if (selectedOption.length > 0) {
    bookings = bookings.filter(b => +b.space_id === +selectedOption)
  }

  return (
    <div className="Bookings">
      <h1>Bookings</h1>

      <div>
        <p>Filter by space</p>
        {spaces.length > 0 && (
          <select name="space" id="space" onChange={(event) => onChangeSpace(event.target.value)} value={selectedOption}>
            <option value={null}>Any Space</option>
            {spaces.map(space => {
              return (<option key={space.id} value={space.id}>{space.name}</option>);
            })
            }
          </select>)
        }

      </div>

      <div className="Spacer"/>

      <div className="Bookings-Container">
        {bookings.length === 0 && <div>No bookings</div>}

        {bookings.length > 0 && (
          <div className="Bookings-Grid-Headers">
            <div>Description</div>
            <div>Start Date</div>
            <div>End Date</div>
            <div>Space</div>
          </div>
        )}

        {bookings.length > 0 && bookings.map(booking => {
          return (<Booking key={booking.id} booking={booking} spaces={spaces}/>)
        })}
      </div>

    </div>
  );
}

export default Bookings;
