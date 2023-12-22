import { createRoot } from 'react-dom/client'
import App from './components/app/app';
import ThemeProvider from './theme/theme-provider';

const root = createRoot(document.getElementById('root'));

root.render(
	<div>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</div>

)