export interface Booking {
  id: number;
  propertyName: string;
  startDate: string;
  endDate: string;
  guests: number;
}

export type State = {
  bookings: Booking[];
};

export type Action =
  | { type: "ADD_BOOKING"; payload: Booking }
  | { type: "UPDATE_BOOKING"; payload: Booking }
  | { type: "DELETE_BOOKING"; payload: number };

const initialState: State = {
  bookings: [],
};

function bookingReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_BOOKING":
      return { ...state, bookings: [...state.bookings, action.payload] };
    case "UPDATE_BOOKING":
      return {
        ...state,
        bookings: state.bookings.map((booking) =>
          booking.id === action.payload.id ? action.payload : booking
        ),
      };
    case "DELETE_BOOKING":
      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking.id !== action.payload
        ),
      };
    default:
      return state;
  }
}

export { initialState, bookingReducer };
