import { useFormikContext } from 'formik';
import { Booking } from '../../types';

const ThankYou = () => {
  const { values } = useFormikContext<Booking>();

  return <div>
    <p>Thank you { values.name }, your appointment has been booked on { values.date } at { values.start }</p>
  </div>;
}

export default ThankYou;