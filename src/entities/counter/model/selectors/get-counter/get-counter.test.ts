import { StateSchema } from "app/providers/store-provider"
import { getCounter } from "./get-counter"

describe('get counter', () => {
	test('first test', () => {
		const state: StateSchema = {
			counter: {
				value: 2
			}
		}
		expect(getCounter(state as StateSchema)).toEqual({ value: 2 })
	})
})
