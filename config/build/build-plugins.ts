import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { ProgressPlugin } from "webpack";
import webpack from 'webpack'
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		}),
	]
}