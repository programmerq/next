/* eslint-env node */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const path = require("path");
const mdxOptions = require("./.build/utils/plugins");
const {
  getLatestVersionRewirites,
  generateSitemap,
} = require("./.build/utils/paths");

const basePath = process.env.NEXT_PUBLIC_ROOT_DIR;

module.exports = withBundleAnalyzer({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  rewrites: async () => {
    return getLatestVersionRewirites();
  },
  future: {
    webpack5: true,
  },
  basePath,
  trailingSlash: true,
  webpack: (config, options) => {
    if (!options.dev) generateSitemap();

    config.module.rules.push({
      test: /\.svg$/,
      exclude: /node_modules/,
      use: ["@svgr/webpack", "url-loader"],
    });
    config.module.rules.push({
      test: /\.(png|jpg|woff2)$/i,
      exclude: /node_modules/,
      use: {
        loader: "url-loader",
        options: {
          limit: 1 * 1024,
          noquotes: true,
          fallback: "file-loader",
          publicPath: `${basePath}/_next/static/images/`,
          outputPath: "static/images/",
          name: "[hash].[ext]",
        },
      },
    });
    config.module.rules.push({
      test: /\.(md|mdx)$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: path.resolve(".build/loaders/mdx-loader.js"),
          options: mdxOptions.default,
        },
      ],
    });

    return config;
  },
});
