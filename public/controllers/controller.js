var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl',['$scope', '$http',
function($scope, $http){
    console.log("Hello world from controller")
    
        $scope.submit = function() {
            
            console.log($scope.submitText);
            
//            inputText = $scope.submitText;
            
        
    };
}]);
