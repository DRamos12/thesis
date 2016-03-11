angular.module('app.login', [])

.controller('loginCtrl', function($scope, store, $location, auth) {
  $scope.login = function () {
    auth.signin({
      authParams: {
        scope: 'openid offline_access',
        device: 'Mobile device'
      },
    }, function (profile, token, accessToken, state, refreshToken) {
      store.set('profile', profile);
      store.set('token', token);
      store.set('refreshToken', refreshToken);
      $location.path('/main');
    }, function (error) {
      //error handling
      console.log(error);
    });

    $scope.logout = function () {
      auth.signout();
      store.remove('profile');
      store.remove('token');
    };
  };
});
