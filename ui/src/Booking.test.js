import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Booking from "./Booking";

test('renders booking correctly', () => {
  const booking = {
    space_id: 3,
    description: 'Brakes and Tyres',
    start_date: "2020-10-24",
    end_date: "2020-10-26"
  };

  const spaces = [
    {
      id: 3,
      name: 'Some space'
    }
  ];

  const { getByText } = render(<Booking booking={booking} spaces={spaces} />);

  const description = getByText(booking.description)
  expect(description).toBeInTheDocument();

  const startDate = getByText(/2020-10-24/i);
  expect(startDate).toBeInTheDocument();

  const endDate = getByText(/2020-10-26/i);
  expect(endDate).toBeInTheDocument();

  const spaceName = getByText(/Some space/i);
  expect(spaceName).toBeInTheDocument();
});
