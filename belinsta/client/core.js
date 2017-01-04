angular.module('app',['ngRoute'])

.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/registration', {
        templateUrl:'./templates/registration.html',
        controller:'registrationCtrl'
    })
    .when('/login', {
        templateUrl:'./templates/login.html',
        controller:'loginCtrl'
    })
    .when('/home', {
        templateUrl:'./templates/home.html',
        controller:'homeCtrl'
    })
    .otherwise({redirectTo: '/login'});
    $locationProvider.html5Mode(true);
})

.controller('registrationCtrl',function($http,$scope, $location){

    $scope.registrate = function(user){
        console.log(user)
        $http.post('/registration',user)
           .success(function(){
               $location.path('/login');
           })
           
    }
})
.controller('loginCtrl',function($http,$scope, $location){
    $scope.login = function(user){
        $http.post('/login',user)
            .success(function(){
                console.log("good")
            })
    }
    
})
.controller('homeCtrl',function($http,$scope, $location){

})