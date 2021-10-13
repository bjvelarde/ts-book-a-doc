import { Doctor } from '../types';

export const getDoctorsAddress = (doctor: Doctor): string => {
  const addressParts = [];
  const {line_1, line_2, district} = doctor.address;

  if (line_1) {
    addressParts.push(line_1);
  }
  if (line_2) {
    addressParts.push(line_2);
  }
  if (district) {
    addressParts.push(district);
  }
  return addressParts.join(', ');
};
