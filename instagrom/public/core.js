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
    // $locationProvider.html5Mode(true);
})

.controller('pictureController',function($http,$scope, $location){

    $http.get('/user')
        .then(res => {
            $scope.user = res.data;
            console.log($scope.user)
        })

    $scope.registrate = function(user){
        console.log(user)
        $http.post('/registration',user)
            .success(function(mess){
                if(mess){
                    console.log(good);
                }
            })
    }
});