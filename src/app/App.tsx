import { FC, Suspense } from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { CounterPage } from "pages/counter-page";
import { MainPage } from "pages/main-page";
import { AboutPage } from "pages/about-page";
import { useTheme } from "./providers/theme-providers";
import { classNames } from "shared/class-names/class-names";
import 'app/styles/index.scss'

const App: FC = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback={<div>LOADING....</div>}>
				<button onClick={toggleTheme}>TOGGLE THEME</button>
				<Router>
					<Link to={'/'}>Main</Link>
					<Link to={'/about'}>About</Link>
					<Link to={'/counter'}>Counter</Link>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/counter" element={<CounterPage />} />
					</Routes>
				</Router>
			</Suspense>
		</div>
	)
}

export default App