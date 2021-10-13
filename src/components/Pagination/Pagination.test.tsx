import { render, screen } from '../../test-utils/testing-library-utils';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Pagination from '.';

test('renders pagination', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Pagination totalCount={100} currentPage={1} />
    </Router>
  );

  const navUL = screen.getByRole('list', {name: /navigation/i});
  expect(navUL).toBeInTheDocument();

  const pages = screen.getAllByRole('listitem');
  expect(pages).toHaveLength(7);
});