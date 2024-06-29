import React from "react";
import BookingItem from "./BookingItem";
import useBookingContext from "../contexs/useBookingContext";

function BookingList() {
  const { state } = useBookingContext();

  return (
    <div className="space-y-4">
      {state.bookings.map((booking) => (
        <BookingItem key={booking.id} booking={booking} />
      ))}
    </div>
  );
}

export default BookingList;
