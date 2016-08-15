angular.module('starter.controllers')
.controller('DashCtrl', function($scope, $state, AirFare) {

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
        return numberWithCommas(price);
    }

    function numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
});
