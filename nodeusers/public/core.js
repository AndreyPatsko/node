var app = angular.module("nodeusers",[]);

app.controller("startController",["$scope","$http",function($scope,$http){
    $scope.users = {};
    $scope.newUser = {};

    $http.get("/api/users")
        .success(function(data){
            $scope.users = data;
        })
        .error(function(mess){
            console.log(mess);

        });
    $scope.deleteUser = function(id){
        $http.delete("/api/users/" + id)
            .success(function(mess){
                if(mess){
                    console.log("deleted")
                }
            });
    
};

$scope.updateUser = function(user){
        $http.post("/api/users/" , user)
            .success(function(mess){
                if(mess){
                    $scope.showUpdate = false;
                    console.log("updated")
                }
            })
    };

    $scope.saveUser = function(newUser){
        $http.post("/api/users/" , newUser)
            .success(function(mess){
                if(mess){
                    console.log("added")
                }
            })
    };
}]);