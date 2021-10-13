import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { useFormikContext, Field, ErrorMessage } from 'formik';
import { useDoctor } from '../../hooks/useDoctor';
import { getDaySchedule } from '../../utils/daySchedule';
import { getFormattedDate } from '../../utils/timeUtils';
import FormSelect from './FormSelect';
import SC from './style';
import { Booking, Doctor } from '../../types';

interface Props { doctor: Doctor };
interface TileProps { date: Date };

const FormUI = ({ doctor }: Props) => {
  const {
    touched,
    errors,
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    isSubmitting,
  } = useFormikContext<Booking>();

  const { today, restDays, isClinicOpen, activeStartDate } = useDoctor(doctor);
  const [bookingDate, setBookingDate] = useState(activeStartDate);

  useEffect(() => {
    setFieldValue('date', getFormattedDate(bookingDate));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookingDate])

  return (
    <>
      <SC.FormGroup className={`mb-3${touched.name && errors.name ? ' error': ''}`} controlId="name">
        <Form.Label>Your name</Form.Label>
        <Field
          component={Form.Control}
          placeholder="Your name"
          defaultValue={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ErrorMessage name="name" component={SC.Error} />
      </SC.FormGroup>
      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <SC.DatePicker
          calendarType="US"
          onChange={(v: Date) => {
            setFieldValue('date', getFormattedDate(v));
            setBookingDate(v);
          }}
          value={bookingDate}
          minDate={today}
          tileDisabled={({ date }: TileProps) => {
            if (restDays.length) {
              return restDays.indexOf(date.getDay()) >= 0;
            } else if (date.toDateString() === today.toDateString()) {
              return !isClinicOpen;
            }
            return false;
          }}
        />
      </Form.Group>
      <SC.FormGroup className={`mb-3${touched.start && errors.start ? ' error': ''}`} controlId="start">
        <Form.Label>Time Slot</Form.Label>
        <Field
          component={FormSelect}
          defaultValue={values.start}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value=''>Choose Time</option>
          {getDaySchedule(doctor, today, bookingDate)}
        </Field>
        <ErrorMessage name="start" component={SC.Error} />
      </SC.FormGroup>
      <Field type="hidden" name="date" value={getFormattedDate(bookingDate)} />
      <Field type="hidden" name="doctorId" value={doctor.id} />
      <SC.Confirm variant="primary" type="submit" disabled={isSubmitting}>
        Confirm
      </SC.Confirm>
    </>
  );
};

FormUI.propTypes = {
  doctor: PropTypes.object
}

export default FormUI;