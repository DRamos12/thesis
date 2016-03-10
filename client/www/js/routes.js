angular.module('app.routes', 
  [
    'auth0',
    'angular-storage',
    'angular-jwt'
  ]
)

.config(function($stateProvider, $urlRouterProvider, authProvider, $httpProvider, jwtInterceptorProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  
  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('main', {
    url: '/main',
    templateUrl: 'templates/main.html',
    controller: 'mainCtrl'
  })

  .state('newGame', {
    url: '/newgame',
    templateUrl: 'templates/newGame.html',
    controller: 'newGameCtrl'
  })

  .state('game', {
    url: '/play',
    templateUrl: 'templates/game.html',
    controller: 'gameCtrl'
  })

$urlRouterProvider.otherwise('/page2');

authProvider.init({
  domain: 'purplecobras.auth0.com',
  clientID:'UUf4W3Rz7wReJq03Pg6eta3vGOFfwg11',
  loginState: 'login'
});

});