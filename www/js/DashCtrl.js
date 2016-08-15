angular.module('starter.controllers')
.controller('DashCtrl', function($scope, $state, AirFare, Helpers) {

    $scope.flights = [];
    AirFare.getGroupedFlights().then(function successCallback(response) {
        $scope.flights = response.data;
    }, function errorCallback(response) {
        console.log("Failed: " + response.statusText);
    })

    $scope.openFlight = function(flight) {
        $state.go('flights', {'flightId': flight.flights});
    }

    $scope.thousands = function(price) {
        return Helpers.numberWithCommas(price);
    }
});
