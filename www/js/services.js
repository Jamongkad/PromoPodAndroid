angular.module('starter.services', ['ngResource'])
.factory('AirFare', function($q, $resource, $http) { 

    var Airfares = $http({method: 'GET', url: 'http://promopod.gearfish.com/airfare'});  
    var GroupedFlights = $http({method: 'GET', url: 'http://promopod.gearfish.com/group_flights'});

    return { 
       getAllAirfairs: getAllAirfairs,
       getGroupedFlights: getGroupedFlights
    };

    function getAllAirfairs() {
        return Airfares;
    }
 
    function getGroupedFlights() {
        return GroupedFlights;
    }
})
.factory('Helpers', function() {
    return {
        numberWithCommas: numberWithCommas,
        setFlightData: setFlightData,
        getFlightData: getFlightData
    };

    var flightData;

    function setFlightData(myFlightData) {
        flightData = myFlightData;
    }

    function getFlightData() {
        return flightData;    
    }

    function numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts[0];
    }
})
