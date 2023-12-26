import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { ProgressPlugin } from "webpack";
import webpack from 'webpack'
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"; // Добавьте эту строку

export default function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			template: paths.html,
			title: isDev ? 'Hot Module Replacement' : '',
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		}),
		new webpack.DefinePlugin({
			__IS__DEV: JSON.stringify(isDev)
		}),
		...(isDev ? [new ReactRefreshWebpackPlugin()] : []),
	];
}
