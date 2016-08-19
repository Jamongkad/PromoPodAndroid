angular.module('starter.controllers')
.controller('DetailCtrl', function($scope, $state, $stateParams, Helpers) {
    console.log("Detail Controller");
    $scope.flightObj = Helpers.getFlightData();

    $scope.goToWebsite = function() {
        console.log($scope.flightObj);
    }

    $scope.numberWithCommas = function(price) {
        return Helpers.numberWithCommas(price);
    }
});
