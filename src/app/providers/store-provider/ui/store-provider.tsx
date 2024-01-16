import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config";
import { StateSchema } from "../config/state-schema";

interface StoreProviderProps extends PropsWithChildren {
	initialState?: StateSchema
}

export const StoreProvdier: FC<StoreProviderProps> = (props) => {
	const { children, initialState } = props

	const store = createReduxStore();
	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}