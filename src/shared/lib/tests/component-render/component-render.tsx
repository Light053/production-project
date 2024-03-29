import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTest';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvdier } from 'app/providers/store-provider';

export interface componentRenderOptions {
	route?: string;
	initialState?: StateSchema
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
	const {
		route = '/',
		initialState
	} = options;

	return render(
		<StoreProvdier initialState={initialState}>
			<MemoryRouter initialEntries={[route]}>
				<I18nextProvider i18n={i18nForTests}>
					{component}
				</I18nextProvider>
			</MemoryRouter>
		</StoreProvdier>
	);
}
