import { render, screen } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Header from '.';

test('renders with default link', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Header />
    </Router>
  );

  const banner = screen.getByRole('banner', {name: /top-bar/i} );
  expect(banner).toBeInTheDocument();

  const linkHome = screen.getByRole('link', {name: /book-a-doctor/i} );
  expect(linkHome).toBeInTheDocument();
});