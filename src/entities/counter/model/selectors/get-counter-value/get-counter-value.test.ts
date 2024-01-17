import { getCounterValue } from "./get-counter-value"
import { DeepPartial } from "react-hook-form/dist/types"
import { StateSchema } from "app/providers/store-provider"

describe('get-counter-value', () => {
	test('first test', () => {

		const state: DeepPartial<StateSchema> = {
			counter: {
				value: 2
			}
		}

		expect(getCounterValue(state as StateSchema)).toEqual(2)
	})
})