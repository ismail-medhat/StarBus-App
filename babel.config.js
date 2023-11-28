module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': ['./components', './components/*'],
          '@screens': ['screens', 'screens/*'],
          '@assets': ['assets', 'assets/*'],
          '@common': ['common', 'common/*'],
          '@hooks': 'hooks',
          '@language': 'language',
          '@navigation': 'navigation',
          '@utils': 'utils',
          '@store': 'store',
        },
      },
    ],
  ],
};
