import { createRoot } from 'react-dom/client'
import App from './app/App';
import ThemeProvider from './app/providers/theme-providers/ui/theme-provider';

const root = createRoot(document.getElementById('root'));

root.render(
	<div>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</div>

)