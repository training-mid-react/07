
module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./src/setupTests.ts'], 
    transform: { '^.+\\.tsx?$': 'ts-jest', },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'], 
    coverageDirectory: 'coverage',
  };
  