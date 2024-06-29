import React, { useReducer, useEffect, ReactNode } from "react";
import BookingContext from "./BookingContext";
import { bookingReducer, initialState } from "../reducers/bookingReducer";
import { State } from "../types/bookingType";

interface BookingProviderProps {
  children: ReactNode;
}

function BookingProvider({ children }: BookingProviderProps) {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  useEffect(() => {
    const storedState = sessionStorage.getItem("bookingState");
    if (storedState) {
      const parsedState: State = JSON.parse(storedState);
      dispatch({ type: "SET_INITIAL_STATE", payload: parsedState });
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("bookingState", JSON.stringify(state));
  }, [state]);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
}

export default BookingProvider;
