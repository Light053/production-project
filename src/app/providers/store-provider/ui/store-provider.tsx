import { FC, PropsWithChildren, useMemo } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/state-schema";

interface StoreProviderProps extends PropsWithChildren {
	initialState?: StateSchema
}

export const StoreProvdier: FC<StoreProviderProps> = (props) => {
	const { children, initialState } = props

	const store = useMemo(() => createReduxStore(initialState), [initialState])

	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}