import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Error } from '_atoms';

test('has no text content by default', async () => {

  render(
    <Error message=""
      expanded={false} />
  );

  await waitFor(() => screen.getByRole('alert'));

  expect(screen.getByRole('alert')).toHaveTextContent('');

});

test('has text content when props are passed', async () => {

  render(
    <Error message="We need your email to contact you"
      expanded={true} />
  );

  await waitFor(() => screen.getByRole('alert'));

  expect(screen.getByRole('alert')).toHaveTextContent('We need your email to contact you');

});
