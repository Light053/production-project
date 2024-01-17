import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './state-schema'
import { CounterReducer } from 'entities/counter'

export function createReduxStore(initialState?: StateSchema) {
	return configureStore<StateSchema>({
		reducer: {
			counter: CounterReducer,
		},
		devTools: __IS__DEV,
		preloadedState: initialState
	})
}


