angular.module('starter.controllers')
.controller('GroupCtrl', function($scope, $state, $stateParams, $http, $ionicNativeTransitions, Helpers) {
    
    var trips = $stateParams.flightId.split('-');

    $scope.trips = trips[0] + " to " + trips[1];

    $http({method: 'GET', url: 'http://promopod.gearfish.com/flights/' + $stateParams.flightId}).then(function(response) {
        console.log(response.data);
        $scope.groupFlights = response.data;
    }, function(response) { 
        console.log(response.data);
    });

    $scope.openFlightDetail = function(flight) {
        Helpers.setFlightData(flight);
        $state.go('detail');
        /*
        $ionicNativeTransitions.stateGo('detail', {}, {}, {
            "type": "fade"
        });
        */
    }

    $scope.numberWithCommas = function(price) {
        return Helpers.numberWithCommas(price);
    }
});
