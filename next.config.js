// next.config.js
const withTypescript = require('@zeit/next-typescript')
const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}


// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.css'] = (file) => {}
}

// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
/**
 * next的配置文件，支持配置嵌套
 */

const configOptions = {
    resolve: {
        alias: {
            '~components': resolve('components'),
            '~config': resolve('config'),
            '~constants': resolve('constants'),
            '~static': resolve('static'),
            '~pages': resolve('pages')
        }
    }
}
module.exports = withTypescript(withCss(withLess({
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    lessLoaderOptions: {
        javascriptEnabled: true,
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",

    },
    webpack(config, options) {
        //  这里面还可以再配置哦 最后一个要return if (options.isServer) config.plugins.push(new
        // ForkTsCheckerWebpackPlugin())
        Object.assign(config.resolve.alias, configOptions.resolve.alias)
        return config
    },

    //打包文件夹
    //distDir: 'build'
})))