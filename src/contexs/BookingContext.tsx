import { createContext } from 'react';
import { Action, State } from '../types/bookingType';

const BookingContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export default BookingContext;