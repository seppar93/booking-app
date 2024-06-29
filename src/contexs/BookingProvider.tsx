import React, { useReducer, ReactNode } from "react";
import BookingContext from "./BookingContext";
import { bookingReducer, initialState } from "../reducers/bookingReducer";

interface BookingProviderProps {
  children: ReactNode;
}

function BookingProvider({ children }: BookingProviderProps) {
  const [state, dispatch] = useReducer(bookingReducer, initialState);
  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
}

export default BookingProvider;
