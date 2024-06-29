import { Action, State } from "../types/bookingType";

const initialState: State = {
  bookings: [],
};

function bookingReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_BOOKING':
      return { ...state, bookings: [...state.bookings, action.payload] };
    case 'UPDATE_BOOKING':
      return {
        ...state,
        bookings: state.bookings.map((booking) =>
          booking.id === action.payload.id ? action.payload : booking
        ),
      };
    case 'DELETE_BOOKING':
      return {
        ...state,
        bookings: state.bookings.filter((booking) => booking.id !== action.payload),
      };
    case 'SET_INITIAL_STATE':
      return action.payload;
    default:
      return state;
  }
}

export { initialState, bookingReducer };
