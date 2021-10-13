import { screen, renderWithFormik } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ThankYou from './ThankYou';

jest.mock('formik', () => ({
  ...jest.requireActual('formik'),
  useFormikContext: () => ({
    values: {
      date: 'date',
      doctorId: 'doctorId',
      start: 'start',
      name: 'name'
    }
  })
}));

test('renders with default label', async () => {
  const history = createMemoryHistory();
  renderWithFormik(
    <Router history={history}>
      <ThankYou />
    </Router>
  );

  const thankYou = screen.getByText(/thank you/i);
  expect(thankYou).toBeInTheDocument();
});