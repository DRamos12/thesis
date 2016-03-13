angular.module('app.login', [])

.controller('loginCtrl', function($rootScope, $scope, store, $state, auth, $ionicHistory, $http) {
  $scope.auth = auth;
  $scope.login = function () {
    auth.signin({
      authParams: {
        scope: 'openid offline_access',
        device: 'Mobile device'
      },
    }, function (profile, token, accessToken, state, refreshToken) {
      store.set('profile', profile);
      store.set('fb_access_token', profile.identities[0].access_token);
      store.set('token', token);
      store.set('refreshToken', refreshToken);
      $http({
        method: 'post',
        url: Config.api + '/signin',
        data: {name: profile.name, pic_url: profile.picture}
      })
      .then(function (response) {
        if (response.data.user) {
          socket.emit('login', {
            user_fb: store.get('profile').user_id.split('|')[1],
            name: store.get('profile').name
          });
          $state.go('main');
        } else {
          $scope.logout();
        }
      })
      .catch(function (error) {
        $scope.logout();
      }); 
    }, function (error) {
      $scope.logout();
    });
  };

  $scope.logout = function () {
    auth.signout();
    socket.emit('logout', store.get('profile').user_id.split('|')[1]);
    store.remove('profile');
    store.remove('token');
    store.remove('fb_access_token');
    $state.go('login');
  };

  if (auth.isAuthenticated) {
    $ionicHistory.nextViewOptions({
      disableAnimate: true
    })
    $state.go('main');
  }
});