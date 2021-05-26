module.exports = {
  name: 'McMakler-challenge-api',
  verbose: true,
  reporters: ['default'],
  testRunner: 'jest-circus/runner',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/@babel',
    '<rootDir>/node_modules/@jest',
    '<rootDir>/node_modules/lodash',
    'signal-exit',
    'is-typedarray',
  ],
  cacheDirectory: './.cache',
};
