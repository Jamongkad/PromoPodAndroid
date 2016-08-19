angular.module('starter.controllers')
.controller('DetailCtrl', function($scope, $state, $stateParams, Helpers) {
    console.log("Detail Controller");
    $scope.flightObj = Helpers.getFlightData();

    $scope.goToWebsite = function() {
        console.log($scope.flightObj);

        if($scope.flightObj.provider == "airasia") {
            window.open('http://www.airasia.com', '_system', 'location=yes'); 
        }

        if($scope.flightObj.provider == "cebupac") {
            window.open('https://www.cebupacificair.com', '_system', 'location=yes'); 
        }

        if($scope.flightObj.provider == "jetstar") {
            window.open('https://www.jetstar.com', '_system', 'location=yes'); 
        }

        if($scope.flightObj.provider == "tigerair") {
            window.open('https://www.tigerair.com', '_system', 'location=yes'); 
        }
    }

    $scope.numberWithCommas = function(price) {
        return Helpers.numberWithCommas(price);
    }
});
