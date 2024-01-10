import { fireEvent, render, screen } from "@testing-library/react"
import { Sidebar } from "./sidebar"
import { renderWithTranslation }
	from "shared/lib/tests/render-with-translation/render-with-translation"

describe('Sidebar', () => {

	test('first test', () => {
		renderWithTranslation(<Sidebar />)

		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	})

	test('sidebar toggle', () => {
		render(renderWithTranslation(<Sidebar />))

		const toggleBtn = screen.getByTestId('sidebar-toggle');
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
	})
})