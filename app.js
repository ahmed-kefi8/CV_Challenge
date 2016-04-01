'use strict';

angular.module('myApp', []).controller('createCvCtrl', ['$scope', function($scope) {

  $scope.user = {
      id: 1,
    firstname: 'AHMED',
    lastname: 'KEFI',
    apropos: 'INGENIEUR INFORMATIQUE',
	apropos1: 'DEVELOPPEUR FULL-STACK',
	compt1: 'JavaScript',
	compt2: 'AngularJS BackboneJS Ember',
	compt3: 'Coffee Script , ES 2015',
	compt4: 'Node.JS',
	compt5: 'HTML CSS SASS , Git et SCRUM',
	presentation: 'je suis un ingénieur jeune et motivé',

  };


}]);