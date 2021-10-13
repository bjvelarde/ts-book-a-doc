import { render, screen, waitForElementToBeRemoved } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Doctor from '.';
import mockDoctor from '../../test-utils/mockDoctor.json';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: 'fakeId'
  })
}));

test('renders doctor page', async () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <Doctor />
    </Router>
  );

  const headerLink = screen.getByRole('link', { name: /book-a-doctor/i });
  expect(headerLink).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.getByTestId(/spinner/i));

  const doctorName = screen.getByText(mockDoctor.name);
  expect(doctorName).toBeInTheDocument();

  const openingHoursTable = screen.getByRole('table', {name: /opening-hours/i} );
  expect(openingHoursTable).toBeInTheDocument();
});
