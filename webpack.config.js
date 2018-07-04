const path = require('path');

module.exports = {
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    before: function(app) {
        // app.get('/some/path', function(req, res) {
        //   res.json({ custom: 'response' });
        // });
      },
    after: function(app) {
        // do fancy stuff
    },
    allowedHosts: [
        // 'host.com',
        // 'subdomain.host.com',
        // 'subdomain2.host.com',
        // 'host2.com'
    ],
    compress: true,
    contentBase: [path.join(__dirname, 'dist'),/*add multiple base if needed*/],  //if there is no base, set to false
    // disableHostCheck: true,
    // bonjour: true,
    // clientLogLevel: 'none',
    // lazy: true,
    // filename: 'bundle.js',
    // headers: {
    //     'X-Custom-Foo': 'bar'
    //   },
    // historyApiFallback: {
    //      disableDotRule: true,
    //     rewrites: [
    //       { from: /^\/$/, to: '/views/landing.html' },
    //       { from: /^\/subpage/, to: '/views/subpage.html' },
    //       { from: /./, to: '/views/404.html' }
    //     ]
    //   }, /* or just set to true */
    // host: '0.0.0.0',
    // hot: true,
    // hotOnly: true,
    // https: {
    //     key: fs.readFileSync('/path/to/server.key'),
    //     cert: fs.readFileSync('/path/to/server.crt'),
    //     ca: fs.readFileSync('/path/to/ca.pem'),
    //   }, /* or just set to true */
    index: 'index.html',
    inline: true,
    noInfo: true,
    open: true,
    port:3000,
    // openPage: '/different/page',
    // overlay: {
    //     warnings: true,
    //     errors: true
    //   }, /* or just set to true */
    // pfx: '/path/to/file.pfx',
    // pfxPassphrase: 'passphrase',
    // proxy: [
    //     {
    //         context: ['/auth', '/api'],
    //         '/api': {
    //             target: 'http://localhost:3000',
    //             pathRewrite: {'^/api' : ''},
    //             secure: false,
    //                 bypass: function(req, res, proxyOptions) {
    //                     if (req.headers.accept.indexOf('html') !== -1) {
    //                     console.log('Skipping proxy for browser request.');
    //                     return '/index.html';
    //                     }
    //                 },
    //         }
    //     }
    // ],
    // public: 'myapp.test:80',
    // publicPath: '/assets/',
    quiet: true,
    // setup: function(app) {
    //     app.get('/some/path', function(req, res) {
    //       res.json({ custom: 'response' });
    //     });
    //   },
    // socket: 'socket',
    // staticOptions: {
    //     redirect: false
    //   },
    stats: 'errors-only',
    // useLocalIp: true,
    watchContentBase: true,
    // watchOptions: {
    //     poll: true
    //   }
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [require('@babel/plugin-proposal-object-rest-spread')]
          }
        }
      }
    ]
  }
};