import { render, screen } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import DoctorCard from '.';
import mockDoctor from '../../test-utils/mockDoctor.json';

test('renders with default label', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <DoctorCard doctor={mockDoctor}/>
    </Router>
  );

  const linkToPage = screen.getByRole('link', {name: /fake doctor description line1, line2, district/i} );
  expect(linkToPage).toBeInTheDocument();

  const title = screen.getByRole('heading', {name: /fake doctor/i} );
  expect(title).toBeInTheDocument();

  const openingHoursTitle = screen.getByRole('heading', {name: /opening hours/i} );
  expect(openingHoursTitle).toBeInTheDocument();
});