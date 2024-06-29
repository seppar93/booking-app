import React, { useState } from "react";
import BookingForm from "./BookingForm";
import { FiEdit, FiTrash } from "react-icons/fi";
import useBookingContext from "../contexs/useBookingContext";
import { Booking } from "../types/bookingType";

interface BookingItemProps {
  booking: Booking;
}

function BookingItem({ booking }: BookingItemProps) {
  const { dispatch } = useBookingContext();
  const [isEditing, setIsEditing] = useState(false);

  function handleDelete() {
    dispatch({ type: "DELETE_BOOKING", payload: booking.id });
  }

  return (
    <div className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-md">
      <div>
        <p className="font-bold">{booking.propertyName}</p>
        <p>{`${booking.startDate} - ${booking.endDate}`}</p>
        <p>{`${booking.guests} guests`}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => setIsEditing(true)}
          className="p-2 text-white bg-yellow-500 rounded"
        >
          <FiEdit />
        </button>
        <button
          onClick={handleDelete}
          className="p-2 text-white bg-red-500 rounded"
        >
          <FiTrash />
        </button>
      </div>
      {isEditing && (
        <BookingForm booking={booking} onClose={() => setIsEditing(false)} />
      )}
    </div>
  );
}

export default BookingItem;
