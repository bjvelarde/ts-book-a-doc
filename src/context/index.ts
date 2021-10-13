import { useContext } from 'react';
import createDataContext from './createDataContext';

import {
  fetchDoctors,
  fetchDoctor,
  fetchBookings,
  fetchBooking,
  createBooking,
  updateBooking,
  navigate,
  search,
  sortCards,
  resetSysError
} from './actions';

import appReducer from './reducer';

export const {Context, Provider} = createDataContext(
  appReducer,
  {
    fetchDoctors,
    fetchDoctor,
    fetchBookings,
    fetchBooking,
    createBooking,
    updateBooking,
    navigate,
    search,
    sortCards,
    resetSysError
  },
  []
);

export const useAppContext = () => {
  const {
    state,
    fetchDoctors,
    fetchDoctor,
    fetchBookings,
    fetchBooking,
    createBooking,
    updateBooking,
    navigate,
    search,
    sortCards,
    resetSysError
  } = useContext<any>(Context);

  return {
    state,
    fetchDoctors,
    fetchDoctor,
    fetchBookings,
    fetchBooking,
    createBooking,
    updateBooking,
    navigate,
    search,
    sortCards,
    resetSysError
  };
};
