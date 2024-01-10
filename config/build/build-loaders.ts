import webpack from "webpack";
import { BuildOptions } from "./types/types";
import { cssLoaders } from "./css-loaders/css-loaders";

export default function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	const cssLoader = cssLoaders(isDev)

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const fileLoaer = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const babelLoader = {
		test: /\.m?ts|js|tsx$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ['@babel/preset-env'],
				"plugins": [
					["i18next-extract", {
						locales: ['ru', 'en'],
						keyAsDefaultValue: true
					}],

				]
			},
		}
	}

	return [
		fileLoaer,
		svgLoader,
		typescriptLoader,
		cssLoader,
	]
}