const path = require('path');

module.exports = {
    // context: path.resolve(__dirname),
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, 'src')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // path: './dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            // include: [
            //     path.join(__dirname,'src')
            // ]
        }]
    },
    // devServer: {
    //     inline:true,
    // }
};