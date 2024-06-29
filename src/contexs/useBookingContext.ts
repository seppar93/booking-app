import { useContext } from 'react';
import BookingContext from './BookingContext';

function useBookingContext() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookingContext must be used within a BookingProvider');
  }
  return context;
}

export default useBookingContext;
