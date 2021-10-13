import { ACTIONS } from './actions';
import {
  Booking,
  State,
  Action,
  DoctorList,
  Doctor,
  BookingList,
  SortOrder
} from '../types';

const appReducer = (state: State, action: Action): State => {
  const bookingsCopy: Array<Booking> = state.bookings ? [...state.bookings.data] : [];
  const defaultSortOrder: SortOrder = 'asc';
  const theState = {
    error: null,
    page: 1,
    search: null,
    sortOrder: defaultSortOrder,
    ...state
  };

  switch (action.type) {
    case ACTIONS.FETCH_DOCTORS:
      return {
        ...theState,
        doctors: action.payload as DoctorList,
        doctor: undefined,
        error: null
      };
    case ACTIONS.FETCH_DOCTOR:
      return {
        ...theState,
        doctor: action.payload as Doctor,
        error: null
      };
    case ACTIONS.FETCH_BOOKINGS:
      return {
        ...theState,
        bookings: action.payload as BookingList,
        booking: undefined,
        error: null
      };
    case ACTIONS.FETCH_BOOKING:
      return {...theState, booking: action.payload as Booking, error: null};
    case ACTIONS.CREATE_BOOKING:
      bookingsCopy.push(action.payload as Booking);
      return {...theState, bookings: {
        total:bookingsCopy.length,
        data: bookingsCopy
      }, error: null};
    case ACTIONS.UPDATE_BOOKING:
      const index: number = bookingsCopy.findIndex(booking => booking.id === (action?.payload as Booking)?.id);
      bookingsCopy[index] = action.payload as Booking;
      return {...theState, bookings: {
        total:bookingsCopy.length,
        data: bookingsCopy
      }, error: null};
    case ACTIONS.NAVIGATE:
      return {...theState, page: action.payload as number};
    case ACTIONS.SEARCH:
      return {...theState, search: action.payload as string};
    case ACTIONS.SORT:
      return {...theState, sortOrder: action.payload as SortOrder};
    case ACTIONS.SET_SYS_ERROR:
        return {...theState, error: action.payload as string};
    default: return state;
  }
};

export default appReducer;