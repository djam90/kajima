import React, {useEffect, useState} from 'react';
import './App.css';
import Bookings from "./Bookings";
import axios from "axios";
import {API_URL} from "./constants";

function App() {

  const [bookings, setBookings] = useState([])
  const [spaces, setSpaces] = useState([])

  useEffect(() => {
    async function fetchBookings() {
      try {
        const response = await axios.get(API_URL + 'bookings');
        setBookings(response.data)
      } catch (error) {
        console.error(error);
      }
    }

    async function fetchSpaces() {
      try {
        const response = await axios.get(API_URL + 'spaces');
        setSpaces(response.data)
      } catch (error) {
        console.error(error);
      }
    }

    fetchBookings();
    fetchSpaces();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://kajima.co.uk/images/kajima-logo-white.png" className="App-logo" alt="logo" />
      </header>

      <main className="App-Main">

        <Bookings bookings={bookings} spaces={spaces}/>
      </main>
    </div>
  );
}

export default App;
