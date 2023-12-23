import { createRoot } from 'react-dom/client'
import App from './app/App';
import ThemeProvider from './app/providers/theme-providers/ui/theme-provider';
import { BrowserRouter } from 'react-router-dom';
const root = createRoot(document.getElementById('root'));

root.render(
	<div>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</div>

)