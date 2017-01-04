angular.module('app',['ngRoute'])
        
.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/registration', {
        templateUrl:'registration.html',
        controller:'pictureController'
    })
    .when('/login', {
        templateUrl:'login.html',
        controller:'pictureController'
    })
    .otherwise({redirectTo: '/login'});
})

.controller('pictureController',function($http,$scope, $location){

    $scope.registrate = function(user){
        console.log(user)
        $http.post('/api/registration',user)
            .success(function(mess){
                if(mess){
                    console.log(good);
                }
            })
    }
});