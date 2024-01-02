import { FC, useEffect } from 'react';
import { useTheme } from "./providers/theme-providers";
import { classNames } from "shared/class-names/class-names";
import { AppRouter } from "./providers/router";
import 'app/styles/index.scss'
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar";

const App: FC = () => {

	const { theme } = useTheme()



	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<div className="content-page">
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	)
}

export default App