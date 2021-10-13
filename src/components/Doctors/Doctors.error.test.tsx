import { render, screen, waitFor, waitForElementToBeRemoved } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { rest } from 'msw';
import { server } from '../../test-utils/mockServer';
import Doctors from '.';

test('handles system error', async () => {
  const {
    REACT_APP_API_BASE_URL: baseUrl,
    REACT_APP_API_DOCTOR_PATH: doctorPath
  } = process.env;

	server.resetHandlers(
		rest.get(`${baseUrl}${doctorPath}`, (req, res, ctx) => res(ctx.status(500)))
	);

  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Doctors />
    </Router>
  );

  await waitForElementToBeRemoved(() => screen.getByTestId(/spinner/i));

	await waitFor(async () => {
		const alert = await screen.findByRole('alert');

		expect(alert).toBeInTheDocument();
	});

});