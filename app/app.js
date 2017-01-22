
var app = angular.module('doctorApp',["ngRoute"])
.config($routeProvider, $locationProvider) => {
  $locationProvider.hasPrefix('');

  $routeProvider
  .when('/', {
    controller:"MainCtrl",
    templateUrl: '/partials/doctor.html'
  })
  .when('/patient', {
    controller: "PatientCtrl",
    templateUrl: 'partials/patient.html'
  })
  .otherwise({
    redirectTo:'/'
  })
}

app.controller('MainCtrl', function($scope){

  console.log("MainCtrl")
})

app.controller('PatientCtrl', function($scope){

  console.log("patient")
})
