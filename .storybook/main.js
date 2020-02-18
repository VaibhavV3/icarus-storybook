const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: ['../stories/**/*.stories.js'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.js|jsx$/,
      loader: 'babel-loader',
      include: [path.resolve(__dirname, '../node_modules/common-component/'),path.resolve(__dirname, '../stories/')],
      query: {
        presets: ["@babel/preset-env", "@babel/preset-react"]
      },
    });

    config.watchOptions = {
      ignored: false, // Patch for issue https://github.com/storybooks/storybook/issues/5572
    }  

    // Return the altered config
    return config;
  },
};