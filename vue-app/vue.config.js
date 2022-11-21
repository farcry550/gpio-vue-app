module.exports = {
    devServer: {
        port: 8085,
        proxy: {
            '^/api': {
                target: "http://gpio.api",
                changeOrigin: true,
                pathRewrite: { '^/api': '/' }
            }
        }
    }
}