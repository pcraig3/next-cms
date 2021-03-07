module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
    }

    return config
  },
}

module.exports = {
  target: "serverless",
  webpack: (config) => {
    config.node = {
      fs: "empty",
    }

    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    })
    return config
  },
}
