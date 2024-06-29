import React, { useState } from "react";
import BookingForm from "./BookingForm";
import { FiEdit, FiTrash } from "react-icons/fi";
import useBookingContext from "../contexs/useBookingContext";
import { Booking } from "../reducers/bookingReducer";

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
    <div className="border p-4 rounded-lg shadow-md flex justify-between items-center bg-white">
      <div>
        <p className="font-bold">{booking.propertyName}</p>
        <p>{`${booking.startDate} - ${booking.endDate}`}</p>
        <p>{`${booking.guests} guests`}</p>
      </div>
      <div className="space-x-2 flex">
        <button
          onClick={() => setIsEditing(true)}
          className="bg-yellow-500 text-white p-2 rounded"
        >
          <FiEdit />
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white p-2 rounded"
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
