const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js',
      builderOptions: {
        publish: ['github'],
        productName: 'Redmine Timer',
        mac: {
          icon: 'src/assets/app/app.icns',
        },
      },
    },
  },
})
