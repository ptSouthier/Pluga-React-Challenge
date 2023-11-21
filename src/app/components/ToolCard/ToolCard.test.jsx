import { fireEvent, render, screen } from '@testing-library/react';

describe('Tool Card Component Requirements', () => {
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
        <ToolCard.Icon icon={toolMockedData.icon} />
        <ToolCard.Name name={toolMockedData.name} />
      </ToolCard.Root>
    );
	});

  it('Must contains the icon and name of the tool', () => {
    const iconElement = screen.getByTestId('tool-icon');
    const nameElement = screen.getByTestId('tool-name');

		expect(iconElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
  });

	it('Must show the correct name of the tool', () => {
    const nameElementTextContent = screen.getByTestId('tool-name').textContent;

    expect(nameElementTextContent).toEqual(toolMockedData.name);
  });

	it('Must open the ToolModal when click on card', () => {
    const cardElement = screen.getByTestId('tool-card');
		fireEvent.click(cardElement);

    const modalElement = screen.getByTestId('tool-modal');

    expect(modalElement).toBeInTheDocument();
  });
});
