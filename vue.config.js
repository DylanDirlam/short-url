const Config = require('./short-url.config')

module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = Config.app_name
      return args
    })
  },
}
