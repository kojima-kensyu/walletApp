export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts'],
    // testMatch: ['**/tests/**/*.test.ts'],
    // moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
      },
      transform: {
        // '^.+\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`
        // '^.+\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`
        '^.+\\.tsx?$': [
          'ts-jest',
          {
            useESM: true,
          },
        ],
      },
}