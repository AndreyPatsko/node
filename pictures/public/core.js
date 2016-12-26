let app = angular.module('pictures',[]);

app.controller('mainController', ['$scope', '$http', '$route', function($scope, $http){
    $scope.pictures = [];

    $scope.savePicture = function(picture){
        $http.post('/picture',picture)
            .success(function(mess){
                if(mess){
                    console.log('added');
                }
            });
    };
    
}]);