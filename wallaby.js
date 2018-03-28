module.exports = function (wallaby) {
	return {
		files: [
			'src/**/*.js'
		],
		tests: [
			'test/**/*.js'
		],
		env: {
			type: 'node',
			runner: 'node'
		},
		compilers: {
			'**/*.js': wallaby.compilers.babel({
				presets: ['@ava/babel-preset-stage-4']
			})
		},
		workers: {restart: true},
		testFramework: 'ava',
		debug: false
	}
}
