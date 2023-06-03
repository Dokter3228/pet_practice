export default {
  preset: 'ts-jest',
  clearMocks: true,
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  moduleDirectories: [
    "node_modules",
  ],
  modulePaths: [
    "<rootDir>/src"
  ],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  rootDir: '../../',
  testMatch: [
    "<rootDir>src/**/(*.)@(spec|test).[tj]s?(x)"
  ],
  // this is a mock configuration for css\scss modules support
  moduleNameMapper: {
    '\\.(css|scss|less)$': 'identity-obj-proxy',
  },
  // this is a transform function for handling different file formats in tests
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/config/__mocks__/fileTransformer.js',
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup-jest.ts'],
}
