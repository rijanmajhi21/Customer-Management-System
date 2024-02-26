const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
        transpileDependencies: true
    })
    // vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                postcssOptions: {
                    plugins: {
                        tailwindcss: {},
                        autoprefixer: {},
                    },
                },
            },
        },
    },
};