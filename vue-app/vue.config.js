module.exports = {
    devServer: {
        port: 8085,
        proxy: {
            '^/api': {
                target: "http://192.168.0.170:5000",
                changeOrigin: true,
                pathRewrite: { '^/api': '/' }
            }
        }
    }
}