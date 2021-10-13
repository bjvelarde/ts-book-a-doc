import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach(async () => {
  render(<App />);

  await waitForElementToBeRemoved(() => screen.getByTestId(/spinner/i));

  await waitFor(async () => {
		const initialCards = await screen.findAllByTestId(/doctor-card/i);

		expect(initialCards).toHaveLength(5);
	});
});

test('initial render', async () => {
  const titleText = screen.getByRole('heading', { name: /book-a-doctor/i });
  expect(titleText).toBeInTheDocument();
});

test('searching', async () => {
  const searchInput = screen.getByRole('textbox', { name: /search/i });
  userEvent.clear(searchInput);
  userEvent.type(searchInput, 'lam');
  userEvent.type(searchInput, '{enter}');

  await waitFor(async () => {
		const cards = await screen.findAllByTestId(/doctor-card/i);

		expect(cards).toHaveLength(2);
	});
});

test('sorting', async () => {
  const cardsASC = await screen.findAllByTestId(/doctor-card/i);
  expect(cardsASC[0]).toContainHTML(`KWOK KWAN MAN`);

  const sortIcon = screen.getByRole('button', {name: /sort-icon/i} );
  userEvent.click(sortIcon);

  await waitFor(async () => {
		const cardsDESC = await screen.findAllByTestId(/doctor-card/i);

		expect(cardsDESC[0]).toContainHTML(`Wan Ting Yuk`);
	});
});

test('clicking the booking button should show modal form', async () => {
  const modalHidden = screen.queryByTestId(/booking-modal/i);
  expect(modalHidden).not.toBeInTheDocument();

  const bookButtons = await screen.findAllByRole('button', {name: /book appointment/i});
  userEvent.click(bookButtons[0]);

  await waitFor(async () => {
		const timeSlots = await screen.findAllByTestId(/time-slot/i);

		expect(timeSlots.length).toBeGreaterThan(0);
	});

  const modalShown = screen.getByTestId(/booking-modal/i);
  expect(modalShown).toBeInTheDocument();

});

test('page routing', async () => {
  const links = await screen.findAllByRole('link');
  userEvent.click(links[0]);

  await waitForElementToBeRemoved(() => screen.getByTestId(/spinner/i));

  const pageTitle = await screen.findByRole('heading', {name: /doctor-name/i});
  expect(pageTitle).toBeInTheDocument();

  const linkHome = screen.getByRole('link', {name: /book-a-doctor/i} );
  userEvent.click(linkHome);

  const titleText = screen.getByRole('heading', { name: /book-a-doctor/i });
  expect(titleText).toBeInTheDocument();

  await waitFor(async () => {
		const initialCards = await screen.findAllByTestId(/doctor-card/i);

		expect(initialCards).toHaveLength(5);
	});
});
