/** @type {import('jest').Config} */
const config = {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}','!node_modules/**','!src/**/*.mock.*'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    testMatch: ['**/*.test.js?(x)']
};

module.exports = config;