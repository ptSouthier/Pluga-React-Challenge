import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ToolCard } from '.';

describe('Tool Card Component Requirements', () => {
  const functionMock = jest.fn();
  let toolMockedData = {};
  
	beforeEach(() => {
		toolMockedData = {
			app_id: "calendly",
			name: "Calendly",
			color: "#656a74",
			icon: "https://assets.pluga.co/apps/icons/calendly/calendly-icon.svg",
			link: "https://pluga.co/ferramentas/calendly/"
		};

    render(
      <ToolCard.Root>
        <ToolCard.View toolData={toolMockedData} onButtonClick={functionMock} />
      </ToolCard.Root>
    );
	});

  it('Must contains the icon and name of the tool', () => {
    const iconElement = screen.getByTestId('tool-card-icon');
    const nameElement = screen.getByTestId('tool-card-name');

		expect(iconElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
  });

	it('Must show the correct name of the tool', () => {
    const nameElementTextContent = screen.getByTestId('tool-card-name').textContent;

    expect(nameElementTextContent).toEqual(toolMockedData.name);
  });

	it('Must call the click handler function when the button is clicked', () => {
    const cardElement = screen.getByTestId('tool-card-button');
		fireEvent.click(cardElement);

    expect(functionMock).toHaveBeenCalledTimes(1);
  });
});
