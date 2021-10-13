export const formatTime = (t: string): string => {
  const [hour, minute] = t.split('.');
  let theHour = parseInt(hour);
  let amOrPm = 'a.m';
  if (theHour > 12) {
    theHour -= 12;
    amOrPm = 'p.m'
  }
  return [theHour, minute].join(':') + ' ' + amOrPm;
};

export const getLocaleDate = (d: Date): Date => {
  const offset: number = d.getTimezoneOffset();
  return new Date(d.getTime() - (offset * 60 * 1000));
};

export const getFormattedDate = (d: Date): string => {
  return getLocaleDate(d).toISOString().split('T')[0];
}