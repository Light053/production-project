import React, { ErrorInfo, ReactNode } from "react";
import { createRoot } from 'react-dom/client';
import App from './app/App';
import ThemeProvider from './app/providers/theme-providers/ui/theme-provider';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from "app/providers/error-boundary";
import { renderWithTranslation } from "shared/lib/tests/render-with-translation/render-with-translation";

const root = createRoot(document.getElementById('root'));
renderWithTranslation(<App />);

root.render(
	<ErrorBoundary>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</ErrorBoundary>
);
