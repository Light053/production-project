import { screen, fireEvent } from '@testing-library/react';
import { Counter } from './counter';
import { componentRender } from 'shared/lib/tests/component-render/component-render';

describe('Counter', () => {
	test('test render', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 10 } },
		});
		expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
		screen.debug();
	});

	test('increment', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 10 } },
		});
		fireEvent.click(screen.getByTestId('increment'));
		expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
	});

	test('decrement', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 10 } },
		});
		fireEvent.click(screen.getByTestId('decrement'));
		expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
	});
});
