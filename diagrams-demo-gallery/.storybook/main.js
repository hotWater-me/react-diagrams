module.exports = {
	stories: ['../demos/*.stories.tsx'],
	core: {
		builder: 'webpack5'
	},
	addons: ['@storybook/addon-actions'],
	webpackFinal: async (config, { configType }) => {
		// Make whatever fine-grained changes you need
		// Return the altered config
		config.resolve.alias = {
			...config.resolve.alias,
			'@projectstorm/react-canvas-core':
				'/Users/yunpeng/Desktop/openSource/react-diagrams/packages/react-canvas-core',

			'@projectstorm/react-diagrams': '/Users/yunpeng/Desktop/openSource/react-diagrams/packages/react-diagrams',

			'@projectstorm/react-diagrams-core':
				'/Users/yunpeng/Desktop/openSource/react-diagrams/packages/react-diagrams-core',

			'@projectstorm/react-diagrams-defaults':
				'/Users/yunpeng/Desktop/openSource/react-diagrams/packages/react-diagrams-defaults',

			'@projectstorm/react-diagrams-routing':
				'/Users/yunpeng/Desktop/openSource/react-diagrams/packages/react-diagrams-routing'
		};
		console.log(config);
		return config;
	}
};
