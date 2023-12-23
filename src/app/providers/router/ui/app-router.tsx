import { Route, Routes } from 'react-router-dom';
import { MainPage } from "pages/main-page";
import { AboutPage } from "pages/about-page";
import { FC, Suspense } from "react";
import { routerConfig } from 'shared/config/route-config/route-config';

export const AppRouter: FC = () => {
	return (
		<Suspense fallback={<div>LOADING....</div>}>
			<Routes>
				{Object.values(routerConfig).map(({ element, path }) =>
					<Route
						key={path}
						element={element}
						path={path}
					/>
				)}
			</Routes>
		</Suspense>
	)
}