process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()

const Dotenv = require('dotenv-webpack');
module.exports = {
  plugins: [
    new Dotenv()
  ]
};
