import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { SearchBar } from '.';

describe('Search Bar Component Requirements', () => {
  const functionMock = jest.fn();
  const searchText = 'Sample';
  let inputElement = null;

	beforeEach(() => {
    render(
      <SearchBar.Root>
        <SearchBar.Input placeholder="Buscar ferramenta" onInputChange={functionMock} />
      </SearchBar.Root>
    );

    inputElement = screen.getByTestId('search-bar-input');

    fireEvent.change(inputElement, { target: { value: searchText } });
	});

  it('Must call the onChange handler function when the element input changes', () => {
    expect(functionMock).toHaveBeenCalledTimes(1);
  });

	it('Must contains the typed value', () => {
		expect(inputElement.value).toBe(searchText);
		expect(inputElement.value).not.toBe('Whatever');
  });
});
