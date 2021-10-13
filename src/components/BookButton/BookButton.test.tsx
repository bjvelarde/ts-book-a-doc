import { render, screen, waitFor } from '../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import BookButton from '.';
import mockDoctor from '../../test-utils/mockDoctor.json';

test('renders and toggles modal area', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <BookButton doctor={mockDoctor}/>
    </Router>
  );

  const button = screen.getByRole('button', {name: /book appointment/i} );
  expect(button).toBeInTheDocument();

  const modalHidden = screen.queryByTestId(/booking-modal/i);
  expect(modalHidden).not.toBeInTheDocument();

  userEvent.click(button);

  await waitFor(async () => {
		const timeSlots = await screen.findAllByTestId(/time-slot/i);

		expect(timeSlots.length).toBeGreaterThan(0);
	});

  const modalShown = screen.getByTestId(/booking-modal/i);
  expect(modalShown).toBeInTheDocument();

  const closeModal = screen.getByRole('button', {name: /close/i} );
  expect(closeModal).toBeInTheDocument();

  const confirmButton = screen.getByRole('button', {name: /confirm/i} );
  expect(confirmButton).toBeInTheDocument();

  const doctorName = screen.getByText(`DR. ${mockDoctor.name.toUpperCase()}`);
  expect(doctorName).toBeInTheDocument();
});