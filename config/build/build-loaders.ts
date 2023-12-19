import webpack from 'webpack'

export default function (): webpack.RuleSetRule[] {

	const typeScriptLoaders = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [
		typeScriptLoaders
	]
}