module.exports = {
  testMatch: [
    '<rootDir>/src/**/*.test.js',
  ],
  transform: {
    '^.*\\.js': 'babel-jest',
  },
  moduleDirectories: [
    '<rootDir>/node_modules',
    '<rootDir>',
  ],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
  coverageReporters: [
    'html',
    'lcov',
  ],
  collectCoverageFrom: [
    'src/*.js',
    'src/**/*.js',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/tests/',
    '<rootDir>/src/index.js',
  ],
  clearMocks: true,
  resetModules: true,
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  setupFiles: ["<rootDir>/polyfill.config.js", "<rootDir>/enzyme.config.js"],
  globals: {
    ROUTERS_FAKE_ROOT: '/fake/root',
  }
};
