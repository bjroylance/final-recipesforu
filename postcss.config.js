module.exports = {
  plugins: [require("autoprefixer")],
  test: /\.scss$/,
  use: [
    "style-loader",
    "css-loader",
    "sass-loader",
  ],
};