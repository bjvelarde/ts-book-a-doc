import http from './http';
import { memoize, values } from 'lodash';
import {
  DoctorList,
  Doctor,
  BookingList,
  Booking,
  BookingPatch,
  HttpResponse,
  SortOrder
} from '../types';

const {
  REACT_APP_API_DOCTOR_PATH: doctorPath,
  REACT_APP_API_BOOKING_PATH: bookingPath,
  REACT_APP_PER_PAGE: perPage
} = process.env;

const fetchDoctors = memoize(async (
  page: number = 1,
  search: string = '',
  sortOrder: SortOrder = 'asc'
): Promise<DoctorList> => {
  console.log(page, search, sortOrder);
  const response: HttpResponse = await http.get(doctorPath!);

  const sortAscending = (a: Doctor, b: Doctor) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }

  const sortDescending = (a: Doctor, b: Doctor) => {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
  }

  const sortFunc = sortOrder === 'asc' ? sortAscending : sortDescending;

  let responseData: Array<Doctor> = response.data.sort(sortFunc);

  if (search && search.trim() !== '') {
    search = search.trim().toUpperCase();
    responseData = responseData.filter( (doctor: Doctor) => {
      const { name, address, description } = doctor;
      return (
        name.toUpperCase().indexOf(search) >= 0 ||
        description.toUpperCase().indexOf(search) >= 0 ||
        address.line_1.toUpperCase().indexOf(search) >= 0 ||
        address.line_2.toUpperCase().indexOf(search) >= 0 ||
        address.district.toUpperCase().indexOf(search) >= 0
      );
    });
  }

  const total: number = responseData.length;
  const sliceStart: number = (page - 1) * parseInt(perPage!);
  let sliceEnd: number = sliceStart + parseInt(perPage!);
  if (sliceEnd > total - 1) {
    sliceEnd = total;
  }

  return {
    total,
    data: responseData.slice(sliceStart, sliceEnd)
  };
}, (...args: any) => values(args).join("_"));

const fetchDoctor = memoize(async (id: string): Promise<Doctor> => {
  const response: HttpResponse = await http.get(`${doctorPath}/${id}`);

  return response.data;
});

const fetchBookings = async (): Promise<BookingList> => {
  const response: HttpResponse = await http.get(bookingPath!);

  return {
    total: response.data.length,
    data: response.data
  };
}

const fetchBooking = memoize(async (id: string): Promise<Booking> => {
  const response: HttpResponse = await http.get(`${bookingPath}/${id}`);

  return response.data;
});

const createBooking = async (booking: Booking): Promise<Booking> => {
  const response: HttpResponse = await http.post(bookingPath!, booking);

  return response.data;
}

const updateBooking = async (id: string, patch: BookingPatch): Promise<Booking> => {
  const response: HttpResponse = await http.patch(`${bookingPath}/${id}`, patch);

  return response.data;
}

const useApi = () => {
  return {
    fetchDoctors,
    fetchDoctor,
    fetchBookings,
    fetchBooking,
    createBooking,
    updateBooking
  };
}

export default useApi;