module.exports = {
  testEnvironment: 'node',
  projects: [
    {
      displayName: 'unit',
      testMatch: ['**/test/unit/**/*.test.js']
    },
    {
      displayName: 'integration',
      testMatch: ['**/test/integration/**/*.test.js'],
      setupFilesAfterEnv: ['./jest.setup.integration.js']
    }
  ]
};