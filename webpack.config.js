module.exports = {
    entry: './entry',
    output: {
        path: 'www',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader?$'
            }
        ]
    }
};