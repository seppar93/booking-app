import React, { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import BookingForm from "./BookingForm";

function BookingItem({ booking }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleDelete() {}

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
