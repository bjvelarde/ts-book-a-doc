import { render, screen } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Spinner from '.';

test('renders spinner', async () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <Spinner />
    </Router>
  );

  const spinner = screen.getByTestId('spinner');
  expect(spinner).toBeInTheDocument();
});