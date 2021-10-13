import { render, screen } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import SearchBar from '.';

test('renders', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <SearchBar />
    </Router>
  );

  const searchIcon = screen.getByRole('button', {name: /search-icon/i} );
  expect(searchIcon).toBeInTheDocument();

  const inputField = screen.getByRole('textbox', {name: /search/i} );
  expect(inputField).toBeInTheDocument();
});