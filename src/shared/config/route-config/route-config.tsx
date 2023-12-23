import { AboutPage } from "pages/about-page"
import { MainPage } from "pages/main-page"
import { RouteProps } from "react-router"

enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
}

const routerPath: Record<AppRoutes, string> = {
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.MAIN]: '/'
}

export const routerConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: routerPath.main,
		element: <MainPage />
	},
	[AppRoutes.ABOUT]: {
		path: routerPath.about,
		element: <AboutPage />
	}
}