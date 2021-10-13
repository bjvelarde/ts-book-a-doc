import { OpeningHour } from '../types';

export const sortOpeningHours = (openingHours: Array<OpeningHour>): Array<OpeningHour> => {
  const days: Array<string> = [
    'SUN',
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT'
  ];

  return openingHours.sort( (a, b) => {
    const indexA = days.indexOf(a.day);
    const indexB = days.indexOf(b.day);
    if (indexA < indexB) return -1;
    if (indexA > indexB) return 1;
    return 0;
  })
};