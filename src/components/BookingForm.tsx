import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Booking, BookingFormData } from "../types/bookingType";
import useBookingContext from "../contexs/useBookingContext";

const bookingSchema = z
  .object({
    propertyName: z.string().min(1, "Property name is required"),
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().min(1, "End date is required"),
    guests: z.number().min(1, "Guests must be at least 1"),
  })
  .refine(
    (data) => {
      const startDate = new Date(data.startDate);
      const endDate = new Date(data.endDate);
      return startDate <= endDate;
    },
    {
      message: "End date must be after start date",
      path: ["endDate"],
    }
  )
  .refine(
    (data) => {
      const today = new Date();
      const startDate = new Date(data.startDate);
      return startDate >= today;
    },
    {
      message: "Start date cannot be in the past",
      path: ["startDate"],
    }
  )
  .refine(
    (data) => {
      const today = new Date();
      const endDate = new Date(data.endDate);
      return endDate >= today;
    },
    {
      message: "End date cannot be in the past",
      path: ["endDate"],
    }
  );

interface BookingFormProps {
  booking?: Booking;
  onClose: () => void;
}

function BookingForm({ booking, onClose }: BookingFormProps) {
  const { state, dispatch } = useBookingContext();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      propertyName: "",
      startDate: "",
      endDate: "",
      guests: 1,
    },
  });

  useEffect(() => {
    if (booking) {
      setValue("propertyName", booking.propertyName);
      setValue("startDate", booking.startDate);
      setValue("endDate", booking.endDate);
      setValue("guests", booking.guests);
    }
  }, [booking, setValue]);

  function onSubmit(data: BookingFormData) {
    const hasOverlap = state.bookings.some(
      (b: Booking) =>
        new Date(b.startDate) <= new Date(data.endDate) &&
        new Date(b.endDate) >= new Date(data.startDate) &&
        b.id !== booking?.id
    );

    if (hasOverlap) {
      setError("startDate", {
        type: "manual",
        message: "Booking dates overlap with an existing booking",
      });
      setError("endDate", {
        type: "manual",
        message: "Booking dates overlap with an existing booking",
      });
      return;
    }

    if (booking) {
      dispatch({
        type: "UPDATE_BOOKING",
        payload: { ...data, id: booking.id },
      });
    } else {
      dispatch({
        type: "ADD_BOOKING",
        payload: { ...data, id: Date.now() },
      });
    }
    onClose();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-4 space-y-4 bg-white rounded-lg shadow-md"
    >
      <Controller
        name="propertyName"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            placeholder="Property Name"
            className={`border p-2 rounded ${
              errors.propertyName ? "border-red-500" : "border-gray-300"
            }`}
          />
        )}
      />
      {errors.propertyName && (
        <p className="text-red-500">{errors.propertyName.message}</p>
      )}

      <Controller
        name="startDate"
        control={control}
        render={({ field }) => (
          <input
            type="date"
            {...field}
            className={`border p-2 rounded ${
              errors.startDate ? "border-red-500" : "border-gray-300"
            }`}
          />
        )}
      />
      {errors.startDate && (
        <p className="text-red-500">{errors.startDate.message}</p>
      )}

      <Controller
        name="endDate"
        control={control}
        render={({ field }) => (
          <input
            type="date"
            {...field}
            className={`border p-2 rounded ${
              errors.endDate ? "border-red-500" : "border-gray-300"
            }`}
          />
        )}
      />
      {errors.endDate && (
        <p className="text-red-500">{errors.endDate.message}</p>
      )}

      <Controller
        name="guests"
        control={control}
        render={({ field }) => (
          <input
            type="number"
            {...field}
            min="1"
            className={`border p-2 rounded ${
              errors.guests ? "border-red-500" : "border-gray-300"
            }`}
          />
        )}
      />
      {errors.guests && <p className="text-red-500">{errors.guests.message}</p>}

      <button type="submit" className="p-2 text-white bg-blue-500 rounded">
        {booking ? "Update Booking" : "Create Booking"}
      </button>
    </form>
  );
}

export default BookingForm;
