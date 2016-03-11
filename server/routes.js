var path = require('path');
var public = path.resolve('client/www');
var url = require('url');
var expressjwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var env = require('node-env-file');

// Reads in .env variables if available
if (process.env.NODE_ENV !== 'production') {
  env(path.resolve('./.env'));
}

var jwtCheck = expressjwt({
  secret: new Buffer(process.env.AUTH_SECRET, 'base64'),
  audience: process.env.AUTH_ID
});

var authRoutes = [];

var routes = [
  {
    path: '/',
    get: function (req, res) {
      res.sendFile(public + '/index.html');
    }
  },
  {
    path: '*',
    get: function (req, res) {
      res.redirect('/');
    }
  }
];

module.exports = function (app, express) {
  app.use(express.static(public));

  // require authorization for each route in authRoutes
  authRoutes.forEach(function (route){
    app.use(route, jwtCheck);
  });

  routes.forEach(function (route){
    for (var key in route) {
      if (key === 'path') { continue; }
      app[key](route.path, route[key]);
    }
  });
};