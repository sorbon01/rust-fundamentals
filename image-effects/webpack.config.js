const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
    entry:'./public/main.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'index.js'
    },
    Plugins:[
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ]
}