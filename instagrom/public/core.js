let app = angular.module('pistures',[]);

app.controller('pictureController',['$scope', '$http', '$route',function($scope,$http){
     
    $scope.registration = function(){
        $http.post('/registration')
            .success(function(mess){
                if(mess){
                console.log('registration');
                };
            });
    };
}]);