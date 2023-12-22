import { FC, Suspense, useState } from "react";
import { CounterPageAsync } from "../pages/counter/counter-page.async";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPageAsync } from "../pages/main-page/main-page.async";
import { Link } from 'react-router-dom';
import { AboutPageAsync } from "../pages/about-page/about-page.async";
import '../styles/index.scss'
import { useTheme } from "../../theme/useTheme";
import { classNames } from "../../helpers/class-names/class-names";

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

						<Route path="/" element={<MainPageAsync />} />
						<Route path="/about" element={<AboutPageAsync />} />
						<Route path="/counter" element={<CounterPageAsync />} />

					</Routes>
				</Router>
			</Suspense>
		</div>
	)
}

export default App