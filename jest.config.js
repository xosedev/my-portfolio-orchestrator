module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transform: {
    '\\.ts$': 'ts-jest'
  },
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,js}',
    '!<rootDir>/node_modules/**',
    '!<rootDir>/dist/**',
    '!<rootDir>/coverage/**',
    '!<rootDir>/src/integrations/**'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/api/entity',
    '<rootDir>/src/common',
    '<rootDir>/src/index.ts',
    '<rootDir>/src/startUp.ts'
  ],
  coverageDirectory: '<rootDir>/coverage/',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)x?$',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/coverage/',
    '<rootDir>/.scannerwork/',
    '<rootDir>/src/common'
  ],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testResultsProcessor: 'jest-sonar-reporter'
}
