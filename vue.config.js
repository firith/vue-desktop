const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js',
      customFileProtocol: './',
      builderOptions: {
        publish: ['github'],
        productName: 'Redmine Timer',
        mac: {
          target: 'dmg',
          icon: 'src/assets/app/app.icns',
        },
        win: {
          target: 'nsis',
          icon: 'src/assets/app/app.ico',
        },
      },
    },
  },
})
