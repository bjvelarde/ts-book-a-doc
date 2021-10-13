import { useMemo } from 'react';
import { getDoctorsAddress } from '../utils/fullAddress';
import { sortOpeningHours } from '../utils/openingHours';
import { Doctor, OpeningHour } from '../types';

interface DoctorData {
  today: Date;
  isClinicOpen: boolean;
  canStillBookToday: boolean;
  activeStartDate: Date;
  fullAddress: string;
  sortedOpeningHours: Array<OpeningHour>;
  restDays: Array<number>;
}

export const useDoctor = (doctor: Doctor): DoctorData => {

  const restDays: Array<number> = useMemo((): Array<number> => {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return doctor.opening_hours.filter(d => d.isClosed).map(d => {
      return days.indexOf(d.day);
    });
  }, [doctor]);

  const doctorData = (): DoctorData => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const getOpeningHoursStatus = () => {
      const dayNow = today.toDateString().split(' ').shift()?.toUpperCase();
      const dateToday = today.toDateString();
      const scheduleToday = doctor.opening_hours.find(d => d.day === dayNow);

      if (scheduleToday) {
        const [startHourString, startMinutes] = scheduleToday.start.split('.');
        const [endHourString, endMinutes] = scheduleToday.end.split('.');
        const startHour = parseInt(startHourString);
        const endHour = parseInt(endHourString);

        let theStartHour = startHourString;

        if (startHour < 10) {
          theStartHour = `0${startHour}`;
        }

        const startTime = (new Date(`${dateToday} ${theStartHour}:${startMinutes}:00+0800`)).getTime();
        const endTime = (new Date(`${dateToday} ${endHourString}:${endMinutes}:00+0800`)).getTime();
        const lastBookingTime = (new Date(`${dateToday} ${endHour - 1}:${startMinutes}:00+0800`)).getTime();
        const timeNow = today.getTime();

        const canStillBookToday = (timeNow <= lastBookingTime);

        return {
          today,
          isClinicOpen: (startTime <= timeNow && timeNow <= endTime),
          canStillBookToday,
          activeStartDate: (canStillBookToday ? today : tomorrow)
        };
      }
      return {
        today,
        isClinicOpen: false,
        canStillBookToday: false,
        activeStartDate: today
      };
    };

    return {
      fullAddress: getDoctorsAddress(doctor),
      sortedOpeningHours: sortOpeningHours(doctor.opening_hours),
      restDays,
      ...getOpeningHoursStatus()
    };
  };

  return doctorData();
};
