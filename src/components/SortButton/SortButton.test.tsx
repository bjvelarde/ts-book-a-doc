import { render, screen } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import SortButton from '.';

test('renders', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <SortButton />
    </Router>
  );

  const sortIcon = screen.getByRole('button', {name: /sort-icon/i} );
  expect(sortIcon).toBeInTheDocument();
});