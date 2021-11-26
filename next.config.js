/** @type {import('next').NextConfig} */
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    camelCase: "dashes",
    importLoaders: 1,
    localIndentName: "[local]___[hash:base64:5]",
  },
  sassLoaderOptions: {
    includePaths: ["node_modules", "./node_modules"],
  },
  reactStrictMode: true,
});
