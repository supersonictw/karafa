module.exports = {
    pages: {
        index: {
            title: 'Karafa',
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/karafa/' : '/',
};
