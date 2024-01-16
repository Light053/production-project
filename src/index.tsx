import { createRoot } from 'react-dom/client';
import App from './app/App';
import ThemeProvider from './app/providers/theme-providers/ui/theme-provider';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from "app/providers/error-boundary";
import 'app/styles/index.scss'
import { StoreProvdier } from 'app/providers/store-provider';
const root = createRoot(document.getElementById('root'));

root.render(
	<StoreProvdier>
		<ErrorBoundary>
			<BrowserRouter>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</ErrorBoundary>
	</StoreProvdier>
);
