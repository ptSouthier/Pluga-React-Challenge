import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ToolModal } from '.';

describe('Tool Modal Component Requirements', () => {
  let toolMockedData = {};
  let mockedLastSeenTools = [];
  
	beforeEach(() => {
		toolMockedData = {
			app_id: "calendly",
			name: "Calendly",
			color: "#656a74",
			icon: "https://assets.pluga.co/apps/icons/calendly/calendly-icon.svg",
			link: "https://pluga.co/ferramentas/calendly/"
		};

    mockedLastSeenTools = [
      {
      "app_id": "google_docs",
      "name": "Google Docs",
      "color": "#005CE2",
      "icon": "https://assets.pluga.co/apps/icons/google_docs/google_docs-icon.svg",
      "link": "https://pluga.co/ferramentas/google_docs/"
      },
      {
        "name": "Google Sheets",
        "app_id": "google_sheets",
        "color": "#0C7742",
        "icon": "https://assets.pluga.co/apps/icons/google_sheets/google_sheets-icon.svg",
        "link": "https://pluga.co/ferramentas/google_sheets/"
      },
      {
        "name": "Google Forms",
        "app_id": "google_forms",
        "color": "#4C3779",
        "icon": "https://assets.pluga.co/apps/icons/google_forms/google_forms-icon.svg",
        "link": "https://pluga.co/ferramentas/google_forms/"
      },
    ];

    render(
      <ToolModal.Root>
        <ToolModal.Content toolData={toolMockedData} />
        <ToolModal.LastSeenTools seenTools={mockedLastSeenTools} />
      </ToolModal.Root>
    );
	});

  it('Must contains the icon, name and link of the tool and the last seen tools field', () => {
    const iconElement = screen.getByTestId('tool-modal-icon');
    const nameElement = screen.getByTestId('tool-modal-name');
    const linkElement = screen.getByTestId('tool-modal-link');
    const lastSeenToolsElement = screen.getByTestId('last-seen-tools');

		expect(iconElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(lastSeenToolsElement).toBeInTheDocument();
  });

	it('Must show the correct name of the tool and Pluga tool website link', () => {
    const nameElementTextContent = screen.getByTestId('tool-modal-name').textContent;
    const linkElement = screen.getByTestId('tool-modal-link');

    expect(nameElementTextContent).toEqual(toolMockedData.name);
    expect(linkElement).toHaveAttribute('href', toolMockedData.link);
  });

  it('Must contains the last 3 seen tools', () => {
    const lastSeenToolsArr = screen.getAllByTestId('tool-card-name');
    const expectedLastSeenToolsLength = mockedLastSeenTools.length;

    expect(lastSeenToolsArr.length).toBe(expectedLastSeenToolsLength);
  });
});
