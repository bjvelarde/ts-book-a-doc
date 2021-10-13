import { screen, renderWithFormik, waitFor } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import BookForm from '.';
import mockDoctor from '../../test-utils/mockDoctor.json';

test('renders with necessary elements', async () => {
  const history = createMemoryHistory();
  renderWithFormik(
    <Router history={history}>
      <BookForm doctor={mockDoctor} />
    </Router>
  );

  const confirmButton = screen.getByRole('button', {name: /confirm/i} );
  expect(confirmButton).toBeInTheDocument();

  await waitFor(async () => {
		const timeSlots = await screen.findAllByTestId(/time-slot/i);

		expect(timeSlots.length).toBeGreaterThan(0);
	});

  const nameField = screen.getByRole('textbox', {name: /your name/i});
  expect(nameField).toBeInTheDocument();

  const timeSlotCombo = screen.getByRole('combobox', {name: /time slot/i});
  expect(timeSlotCombo).toBeInTheDocument();

  const datePicker = screen.getByText(/date/i);
  expect(datePicker).toBeInTheDocument();
});