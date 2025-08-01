module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@screens': './src/screens',
          '@screens/*': 'src/screens/*',
          '@theme': './src/theme',
          '@constants': './src/constants',
          '@components': './src/components',
        },
      },
    ],
  ],
};
