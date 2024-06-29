import React from "react";
import BookingItem from "./BookingItem";

function BookingList({ state }) {
  return (
    <div className="space-y-4">
      {state.bookings.map((booking) => (
        <BookingItem key={booking.id} booking={booking} />
      ))}
    </div>
  );
}

export default BookingList;
