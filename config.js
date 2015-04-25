var dest = './dist';
var src = './src';

module.exports = {
  browserSync: {
    server: dest
  },
  sass: {
    src: src + '/sass/*.scss',
    dest: dest + '/style',
    maps: './maps'
  },
  markup: {
    src: src + '/html/**',
    dest: dest
  },
  browserify: {
    debug: true,  // Enable source maps
    entry: src + '/js/index.js',
    dest: dest + '/js',
    outputName: 'bundle.js'
  },
  test: {
    src: './test/*.js'
  }
};
