import { FC } from "react";
import { useTheme } from "./providers/theme-providers";
import { classNames } from "shared/class-names/class-names";
import { AppRouter } from "./providers/router";
import 'app/styles/index.scss'
import { Navbar } from "widgets/navbar";


const App: FC = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<button onClick={toggleTheme}>TOGGLE THEME</button>
			<AppRouter />
		</div>
	)
}

export default App