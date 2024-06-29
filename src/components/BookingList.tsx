import React from "react";
import BookingItem from "./BookingItem";
import useBookingContext from "../contexs/useBookingContext";
import { Booking } from "../types/bookingType";

function BookingList() {
  const { state } = useBookingContext();

  return (
    <div className="space-y-4">
      {state.bookings.map((booking: Booking) => (
        <BookingItem key={booking.id} booking={booking} />
      ))}
    </div>
  );
}

export default BookingList;
