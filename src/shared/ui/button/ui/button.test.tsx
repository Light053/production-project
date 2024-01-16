import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from "./button"

describe('button', () => {
	test('test 1', () => {
		render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
		expect(screen.getByText('TEST')).toHaveClass('clear');
		screen.debug();
	})
})