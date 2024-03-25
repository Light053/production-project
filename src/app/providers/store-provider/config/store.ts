import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './state-schema'
import { CounterReducer } from '../../../../entities/counter/index'
import { UserReducer } from '../../../../entities/user'

export function createReduxStore(initialState?: StateSchema) {

	const rootReducers: ReducersMapObject<StateSchema> = {
		counter: CounterReducer,
		user: UserReducer
	}

	return configureStore<StateSchema>({
		reducer: rootReducers,
		devTools: __IS__DEV,
		preloadedState: initialState
	})
}


