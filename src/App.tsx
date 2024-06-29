import React, { useState } from 'react';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function toggleForm() {
    setIsFormOpen(!isFormOpen);
  }

  return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Booking Management</h1>
        <button
          onClick={toggleForm}
          className="bg-green-500 text-white p-2 rounded mb-4"
        >
          Book
        </button>
        {isFormOpen && <BookingForm onClose={toggleForm} />}
        <BookingList />
      </div>
  );
}

export default App;
