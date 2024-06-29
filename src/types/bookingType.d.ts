export interface Booking {
  id: number;
  propertyName: string;
  startDate: string;
  endDate: string;
  guests: number;
}

export interface BookingFormData {
  propertyName: string;
  startDate: string;
  endDate: string;
  guests: number;
}

export type State = {
  bookings: Booking[];
};

export type Action =
  | { type: 'ADD_BOOKING'; payload: Booking }
  | { type: 'UPDATE_BOOKING'; payload: Booking }
  | { type: 'DELETE_BOOKING'; payload: number }
  | { type: 'SET_INITIAL_STATE'; payload: State };