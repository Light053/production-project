import { AboutPage } from "pages/about-page"
import { MainPage } from "pages/main-page"
import { NotFoundPage } from "pages/not-found-page"
import { RouteProps } from "react-router"

enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	NOT_FOUND = 'not_found'
}

const RouterPath: Record<AppRoutes, string> = {
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.MAIN]: '/',
	[AppRoutes.NOT_FOUND]: '*'
}

export const routerConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RouterPath.main,
		element: <MainPage />
	},
	[AppRoutes.ABOUT]: {
		path: RouterPath.about,
		element: <AboutPage />
	},
	[AppRoutes.NOT_FOUND]: {
		path: RouterPath.not_found,
		element: <NotFoundPage />
	}
}