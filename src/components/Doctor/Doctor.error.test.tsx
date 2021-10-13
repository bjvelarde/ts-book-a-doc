import { render, screen, waitFor } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { rest } from 'msw';
import { server } from '../../test-utils/mockServer';
import Doctor from '.';

 jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: 'fakeId2'
  })
}));

const {
  REACT_APP_API_BASE_URL: baseUrl,
  REACT_APP_API_DOCTOR_PATH: doctorPath
} = process.env;

server.resetHandlers(
  rest.get(`${baseUrl}${doctorPath}/fakeId2`, (req, res, ctx) => res(ctx.status(500)))
);

test('handles system error', async () => {

  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Doctor />
    </Router>
  );

	await waitFor(async () => {
		const alert = await screen.findByRole('alert');

		expect(alert).toBeInTheDocument();
	});

});