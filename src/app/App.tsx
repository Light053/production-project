import { FC, useState } from 'react';
import { useTheme } from "./providers/theme-providers";
import { classNames } from "shared/lib/class-names/class-names";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar";
import 'app/styles/index.scss'

const App: FC = () => {
	const { theme } = useTheme()

	return (
		<div id='main' className={classNames('app', {}, [theme])}>
			<Navbar />
			<div className="content-page">
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	)
}

export default App