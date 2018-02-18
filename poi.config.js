/*eslint-disable*/
module.exports = (options, req) => ({
  entry: ['node_modules/react-hot-loader/patch', './react/index.js', ],
  html: {
    title: 'Alex Bonine\'s React Playground',
    description: 'Playground for React',
  },
  dist: 'dist/react',
  plugins: [
    require('poi-preset-react')(),
  ],
  port: 3003,
});
