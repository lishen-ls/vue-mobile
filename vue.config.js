module.exports = {
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vuex': 'Vuex',
            'vue-router': 'VueRouter',
        }
    },
    devServer: {
        proxy: {
            '/': {
                ws: false,
                target: 'http://129.211.65.70'
            }
        }
    }
}