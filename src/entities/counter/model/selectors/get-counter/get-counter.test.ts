import { StateSchema } from "app/providers/store-provider"
import { getCounter } from "./get-counter"
import { DeepPartial } from "react-hook-form/dist/types"

describe('get counter', () => {
	test('first test', () => {
		const state: DeepPartial<StateSchema> = {
			counter: {
				value: 2
			}
		}
		expect(getCounter(state as StateSchema)).toEqual({ value: 2 })
	})
})
