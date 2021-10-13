import { render, screen, waitFor, waitForElementToBeRemoved } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Doctors from '.';

test('renders with doctors list', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Doctors />
    </Router>
  );

  const titleText = screen.getByRole('heading', { name: /book-a-doctor/i });
  expect(titleText).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.getByTestId(/spinner/i));

  await waitFor(async () => {
		const cards = await screen.findAllByTestId(/doctor-card/i);

		expect(cards.length).toBeGreaterThan(0);
	});
});