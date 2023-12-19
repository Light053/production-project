import { BuildOptions } from "./types/types"
import path from "path";
import buildPlugins from "./build-plugins";
import webpack from "webpack";
import buildLoaders from "./build-loaders";
import buildResolvers from "./build-resolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { mode, paths } = options
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
	};
}