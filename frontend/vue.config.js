module.exports = {
  devServer: {
    proxy: 'http://localhost:8000/'
  },

  outputDir: '../public',

  indexPath: process.env.NODE_ENV === 'production'
    ? '../resources/views/index.blade.php'
    : 'index.html'
}
