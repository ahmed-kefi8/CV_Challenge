var CVapp = angular.module('CVapp', ['ngRoute']);


    CVapp.config(function($routeProvider) {
        $routeProvider
            .when('/', {
              redirectTo: 'home'
            })
            .when('/home', {
                templateUrl : 'views/home.html',
                controller  : 'homeCtrl'
            })

            .when('/Visionner_CV', {
                templateUrl : 'views/Visionner_CV.html',
                controller  : 'Visionner_CvCtrl'
            })

            .when('/Ajouter_CV', {
                templateUrl : 'views/Ajouter_CV.html',
                controller  : 'Ajouter_CVCtrl'
            });


    });

CVapp.controller('homeCtrl', ['$scope', function($scope) {

	


	}]);




CVapp.controller('Visionner_CvCtrl', ['$scope', function($scope) {

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
	poste: 'Developpeur Full-Stack',
	employeur: 'Craftacademy',
	lieu:'Hammamet',
	duree:'Mars Avril Mai 2016',
	descr:'Superbe Formation avec Craftacademy',
	diplome: 'Diplome National Ingenieur',
	ecole: 'ESPRIT',
	lieuDip: 'Tunis',
	annee: '2015',
	descrDiplome: "Diplôme ingénieur en informatique mention Très Bien à l Ecole Supérieure Privée d Ingénierie et de Technologies (ESPRIT) école accrédité par la Commission des Titres d Ingénieur (CTI) et labellisée EUR-ACE (Accréditation des formations d ingénieurs en Europe)",
	loisir: 'Science, Sport, Cinema', 
	association:'Protection des animeaux',
	email:'ahmedkefi.ing@gmail.com',
	phone:'(+216)50848529'

	

  };



}]);


CVapp.controller('Ajouter_CvCtrl', ['$scope', function($scope) {
	}]);