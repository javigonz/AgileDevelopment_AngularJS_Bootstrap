module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    files: [
      'test/**/*.js',
      'test/**/*.spec.js'
    ]
  });
};