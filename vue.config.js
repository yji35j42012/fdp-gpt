const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/fdp-gpt' : '/'
  // transpileDependencies: true

  , chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = "MED PILOT";
        return args;
      })
  }
})
