export interface Address {
    line_1: string;
    line_2: string;
    district: string;
};

export interface OpeningHour {
    day: string;
    start: string;
    end: string;
    isClosed: boolean;
};

export interface Doctor {
    id: string;
    name: string;
    description: string;
    address: Address;
    opening_hours: Array<OpeningHour>
};

export interface DoctorList {
    total: number;
    data: Array<Doctor>
};

export interface Booking {
    id?: string;
    doctorId: string;
    name: string;
    date: string;
    start: number | string;
    status?: string;
};

export interface BookingList {
    total: number;
    data: Array<Booking>
};

export interface BookingPatch {
    date: string;
    start: number;
};

export interface HttpResponse {
    data: any;
}

export type SortOrder = 'asc' | 'desc';

export interface State {
    doctors?: DoctorList;
    doctor?: Doctor;
    bookings?: BookingList;
    booking?: Booking;
    page?: number;
    search?: string | null;
    sortOrder?: SortOrder;
    error?: string | null;
}

export type Action =
  | { type: string, payload: DoctorList }
  | { type: string, payload: Doctor }
  | { type: string, payload: BookingList }
  | { type: string, payload: Booking }
  | { type: string, payload: string }
  | { type: string, payload: number }
  | { type: string, payload: null }