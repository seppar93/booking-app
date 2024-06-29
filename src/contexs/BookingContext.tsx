import { createContext } from 'react';
import { Action, State } from '../reducers/bookingReducer';

const BookingContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export default BookingContext;