 /** @type {import('jest').Config} */
const config = {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}','!node_modules/**','!src/**/*.mock.*'],
     testMatch: [ 'src/**/*.spec.js?(x)' ],
};

module.exports = config;