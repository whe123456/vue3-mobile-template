// postcss.config.js
module.exports = {
    plugins: {
        'postcss-px2rem-exclude': {
            remUnit: 37.5,
            exclude: /node_modules|vant|pages\/pc/i,
        },
    },
}
