angular.module('app.login', [])

.controller('loginCtrl', function($rootScope, $scope, store, $state, auth, $ionicHistory, $http, Game, Auth) {
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
          store.set('remote_id', response.data.user.id);
          store.set('current_game_id', response.data.user.current_game_id);
          Game.game.id = response.data.user.current_game_id;
          Game.getGame();
          //SOCKET EMIT login userInfo.fb ,.name

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
    Auth.logout();
  };

  if (auth.isAuthenticated) {
    $ionicHistory.nextViewOptions({
      disableAnimate: true
    })
    $state.go('main');
  }
});
