module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.ts', '.ios.js', '.android.js', '.json', '.svg', '.png', '.jpg'],
          alias: {
            navigation: './src/navigation/',
            theme: './src/theme/',
            screens: './src/screens/',
            components: './src/components/',
            fonts: './src/assets/fonts',
          },
        },
      ],
    ],
    presets: ['babel-preset-expo'],
  };
};
