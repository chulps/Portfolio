module.exports = {
  scripts: {
    commit: 'git-cz',

    test: {
      default: 'jest',
      watch: {
        script: 'jest --watch',
        description: 'Run jest in watch mode',
      },
      cover: {
        script: 'jest --coverage --no-cache',
        description: 'Run test coverage',
      },
    },

    'report-coverage': {
      script: 'codecov',
      description: 'Report code coverage to codecov',
    },

    build: {
      script: 'mkdir -p build && ./node_modules/.bin/babel ./lib/Headspace.js --out-file ./build/index.js',
      description: 'Create build directory',
    },

    prepublish: 'npm run build',

    'semantic-release': 'semantic-release pre && npm publish && semantic-release post',
  },
};
