import { fireEvent, render, screen } from "@testing-library/react"
import { Sidebar } from "./sidebar"
import { renderWithTranslation }
	from "shared/lib/tests/render-with-translation/render-with-translation"

describe('Sidebar', () => {
	test('with only first param', () => {
		render(renderWithTranslation(<Sidebar />))
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('test toggle', () => {
		render(renderWithTranslation(<Sidebar />))
		const toggleBtn = screen.getByTestId('sidebar-toggle');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});