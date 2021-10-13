import { Doctor, OpeningHour } from '../types';

export const getDaySchedule = (
  doctor: Doctor,
  today: Date,
  bookingDate: Date
): any => {
  const bookingDateDay: string | undefined = bookingDate.toDateString().split(' ').shift()?.toUpperCase();
  const scheduleDay: OpeningHour | undefined = doctor.opening_hours.find(d => d.day === bookingDateDay);
  const options = [];

  if (scheduleDay) {
    const [startHourString, minuteOffset] = scheduleDay.start.split('.');
    const [endHourString, endMinuteOffset] = scheduleDay?.end.split('.');
    const startingHour = parseInt(startHourString);
    const endingHour = parseInt(endHourString);

    const isForToday = bookingDate.toDateString() === today.toDateString();

    const amOrPm = (t: number) => {
      return t >= 12 ? 'p.m.' : 'a.m.';
    };

    const getHour = (h: number) => {
      let theHour = `${h}`;
      if (h > 12) {
        theHour = `${h - 12}`;
      }
      return theHour;
    };

    for (let i = startingHour; i < endingHour; i++) {
      const startTime = `${getHour(i)}:${minuteOffset} ${amOrPm(i)}`;
      const endTime = `${getHour(i + 1)}:${i === endingHour - 1 ? endMinuteOffset: minuteOffset} ${amOrPm(i + 1)}`;
      const isDisabled = (isForToday && i < today.getHours());
      // const optionStrValue = `${i}.${minuteOffset}`;
      options.push(
        <option key={i} value={`${i - startingHour}`} disabled={isDisabled} data-testid="time-slot">
          {`${startTime} - ${endTime}`}
        </option>
      );
    }
  }

  return options;
};