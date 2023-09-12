
const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'auto-column.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/, // 匹配 JavaScript 文件
                exclude: /node_modules/, // 排除 node_modules 目录
                loader: 'babel-loader',
                options: {
                    //  预设babel做怎样的兼容性处理
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                //  按需加载
                                useBuiltIns: 'usage',
                                //  指定core-js版本
                                corejs: {
                                    version: 3
                                },
                                //  指定兼容性到浏览器的哪个版本
                                targets: {
                                    chrome: '60',
                                    firefox: '60',
                                    safari: '50',
                                    edge: '17'
                                }
                            }
                        ]
                    ]
                }
            },
        ]
    }
}
