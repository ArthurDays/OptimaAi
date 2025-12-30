module.exports = {
    testEnvironment: 'jsdom',
    verbose: true,
    moduleFileExtensions: ['js'],
    roots: ['<rootDir>/tests'],
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
};
