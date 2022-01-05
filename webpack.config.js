let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  console.log(mode);
  mode = 'production';
}
console.log(mode);

module.exports = {
  mode,

  //   devtool: "source-map",
  devServer: {
    static: './dist',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
