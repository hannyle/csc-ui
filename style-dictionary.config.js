module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'build/',
      files: [
        {
          destination: 'variables.scss',
          format: 'scss/variables',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      buildPath: 'build/',
      files: [
        {
          format: 'css/variables',
          destination: 'variables.css',
        },
      ],
    },
  },
};
