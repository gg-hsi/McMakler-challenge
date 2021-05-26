module.exports = {
  name: 'McMakler-challenge-e2e',
  verbose: true,
  reporters: ['default'],
  testRunner: 'jest-circus/runner',
  setupFilesAfterEnv: ['expect-puppeteer', '<rootDir>/setup.js'],
  preset: 'jest-puppeteer',
  testEnvironment: 'jest-environment-puppeteer',
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
  globalSetup: './global-setup.js',
  cacheDirectory: './.cache',
};
