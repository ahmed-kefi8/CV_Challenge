'use strict';

angular.module('myApp', []).controller('createCvCtrl', ['$scope', function($scope) {

  $scope.user = {
      id: 1,
    firstname: 'ahmed',
    lastname: 'kefi',
    apropos: 'Ingénieur informatique'

  };


}]);