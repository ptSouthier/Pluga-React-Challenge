import { fireEvent, render, screen } from '@testing-library/react';
import pluga_tools_search from '@/public/data/pluga_tools_search.json';

describe('Search Bar Component Requirements', () => {
  let toolsMockedData = [];
  
	beforeEach(() => {
		toolsMockedData = [...pluga_tools_search];

    render(
      <SearchBar.Root>
        <SearchBar.Input placeholder="Buscar ferramenta" dataToSearch={toolsMockedData} />
      </SearchBar.Root>
    );
	});

	it('Must find a tool by its name', () => {
    const inputElement = screen.getByTestId('search-bar-input');

    const toolNameToSearch = 'Omie';
    fireEvent.change(inputElement, { target: { value: toolNameToSearch } });

    const expectedToolNameToBe = screen.getByText(toolNameToSearch);
    const unexpectedToolName = screen.getByText('Hotmart');

		expect(expectedToolNameToBe).toBeInTheDocument();
		expect(unexpectedToolName).not.toBeInTheDocument();
  });

  it('Must shows no result when searching for an inexistent tool name', () => {
    const inputElement = screen.getByTestId('search-bar-input');

    const toolNameToSearch = 'Inexistent';
    fireEvent.change(inputElement, { target: { value: toolNameToSearch } });

    const toolCardElement = screen.getByTestId('tool-card');

		expect(toolCardElement).not.toBeInTheDocument();
  });
});
