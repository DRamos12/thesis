angular.module('app.newGame', [])

.controller('newGameCtrl', function ($scope) {

  $scope.inviting = {};
  $scope.rules = {
    maxScore: 15,
    skipIfGuessed: true
  };
  $scope.error = '';

  $scope.toggleInvite = function (friend) {
    if($scope.inviting[friend.id]){
      delete $scope.inviting[friend.id];
    } else {
      $scope.inviting[friend.id] = true;
    }
  };
  $scope.restrictScore = function () {

    if (isNaN ($scope.rules.maxScore) ) {
      $scope.error = 'Please enter numeric value';
      return;
    } else {
      if($scope.rules.maxScore > 50 || $scope.rules.maxScore < 10){
        $scope.error = "Score must be between 10 and 50";
        return;
      }
    }
    $scope.error = '';
  };

});
