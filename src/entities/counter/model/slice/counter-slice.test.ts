import { CounterActions, CounterReducer } from "./counterSlice"
import { CounterSchema } from "../types/counter-schema"

describe('counter-slice', () => {
	test('decrement', () => {
		const state: CounterSchema = {
			value: 2
		}

		expect(
			CounterReducer(state, CounterActions.decrement()))
			.toEqual({ value: 1 })
	})

	test('increment', () => {
		const state: CounterSchema = {
			value: 2
		}

		expect(
			CounterReducer(state, CounterActions.increment()))
			.toEqual({ value: 3 })
	})

	test('empty state', () => {
		expect(
			CounterReducer(undefined, CounterActions.increment()))
			.toEqual({ value: 1 })
	})
})