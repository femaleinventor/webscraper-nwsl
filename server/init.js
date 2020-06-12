// process.env.NODE_ENV = 'development';
require('@babel/register')({
  ignore: [/\/(build|node_modules|bower_components)\//],
  presets: [
    ["@babel/env", {"useBuiltIns": "usage"}],
    "@babel/react"
  ],
  extensions: [".es6", ".es", ".jsx", ".js"],
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ]
});
require('./server.js');
