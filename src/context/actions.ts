import { Dispatch } from 'react';
import useApi from '../api';
import { Action, Booking, BookingPatch, SortOrder } from '../types';

export const ACTIONS = {
  FETCH_DOCTORS: 'fetch-doctors',
  FETCH_DOCTOR: 'fetch-doctor',
  FETCH_BOOKINGS: 'fetch-bookings',
  FETCH_BOOKING: 'fetch-booking',
  CREATE_BOOKING: 'create-booking',
  UPDATE_BOOKING: 'update-booking',
  NAVIGATE: 'navigate',
  SEARCH: 'search',
  SORT: 'sortCards',
  SET_SYS_ERROR: 'set-sys-error'
};



export const fetchDoctors = (dispatch: Dispatch<Action>) => async (
  page: number = 1,
  search: string = '',
  sortOrder: SortOrder = 'asc'
): Promise<void> => {
  try {
    const { fetchDoctors } = useApi();
    const data = await fetchDoctors(page, search, sortOrder);
    dispatch({ type: ACTIONS.FETCH_DOCTORS, payload: data });
  } catch (e: any) {
    dispatch({ type: ACTIONS.SET_SYS_ERROR, payload: e.message });
  }
}

export const fetchDoctor = (dispatch: Dispatch<Action>) => async (id: string): Promise<void> => {
  try {
    const { fetchDoctor } = useApi();
    const data = await fetchDoctor(id);
    dispatch({ type: ACTIONS.FETCH_DOCTOR, payload: data });
  } catch (e: any) {
    dispatch({ type: ACTIONS.SET_SYS_ERROR, payload: e.message });
  }
}

export const fetchBookings = (dispatch: Dispatch<Action>) => async (): Promise<void> => {
  try {
    const { fetchBookings } = useApi();
    const data = await fetchBookings();
    dispatch({ type: ACTIONS.FETCH_BOOKINGS, payload: data });
  } catch (e: any) {
    dispatch({ type: ACTIONS.SET_SYS_ERROR, payload: e.message });
  }
}

export const fetchBooking = (dispatch: Dispatch<Action>) => async (id: string): Promise<void> => {
  try {
    const { fetchBooking } = useApi();
    const data = await fetchBooking(id);
    dispatch({ type: ACTIONS.FETCH_BOOKING, payload: data });
  } catch (e: any) {
    dispatch({ type: ACTIONS.SET_SYS_ERROR, payload: e.message });
  }
}

export const createBooking = (dispatch: Dispatch<Action>) => async (booking: Booking): Promise<void> => {
  try {
    const { createBooking } = useApi();
    const data = await createBooking(booking);
    dispatch({ type: ACTIONS.CREATE_BOOKING, payload: data });
  } catch (e: any) {
    dispatch({ type: ACTIONS.SET_SYS_ERROR, payload: e.message });
    throw e; // rethrow to be caught by form
  }
}

export const updateBooking = (dispatch: Dispatch<Action>) => async (
  id: string,
  patch: BookingPatch
): Promise<void> => {
  try {
    const { updateBooking } = useApi();
    const data = await updateBooking(id, patch);
    dispatch({ type: ACTIONS.UPDATE_BOOKING, payload: data });
  } catch (e: any) {
    dispatch({ type: ACTIONS.SET_SYS_ERROR, payload: e.message });
  }
}

export const navigate = (dispatch: Dispatch<Action>) => (page: number): void => {
  dispatch({ type: ACTIONS.NAVIGATE, payload: page });
}

export const search = (dispatch: Dispatch<Action>) => (term: string): void => {
  dispatch({ type: ACTIONS.SEARCH, payload: term });
}

export const sortCards = (dispatch: Dispatch<Action>) => (order: SortOrder): void => {
  dispatch({ type: ACTIONS.SORT, payload: order });
}

export const resetSysError = (dispatch: Dispatch<Action>) => (): void => {
  dispatch({ type: ACTIONS.SET_SYS_ERROR, payload: null });
}