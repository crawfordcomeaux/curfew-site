var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'yo-site'
    },
    port: 3000,
    db: 'mongodb://localhost/yo-site-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'yo-site'
    },
    port: 3000,
    db: 'mongodb://localhost/yo-site-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'yo-site'
    },
    port: 3000,
    db: 'mongodb://localhost/yo-site-production'
  }
};

module.exports = config[env];
