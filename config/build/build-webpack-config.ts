import { BuildOptions } from "./types/types"
import path from "path";
import buildPlugins from "./build-plugins";
import webpack from "webpack";
import buildLoaders from "./build-loaders";
import buildResolvers from "./build-resolvers";
import BuildDevServer from "./build-dev-server";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { mode, paths, isDev } = options
	return {
		mode: mode,
		entry: paths.entry,

		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		plugins: buildPlugins(options),
		devServer: isDev ? BuildDevServer(options) : undefined,
		devtool: isDev ? 'inline-source-map' : undefined,
	};
}