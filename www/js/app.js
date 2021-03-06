// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'angularMoment', 'ionic-native-transitions'])

.run(function($ionicPlatform, $ionicConfig, $ionicNativeTransitions) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $ionicNativeTransitions.enable(true);
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('index', {
    url: '/index',
    nativeTransitionsAndroid: {
        "type": "flip",
        "direction": "right"
    },
    nativeTransitionsBackAndroid: {
        "type": "flip",
        "direction": "left"
    },
    templateUrl: 'templates/list-dash.html',
    controller: 'DashCtrl'
  })
  .state('flights', {  
    url: '/flights/:flightId',
    nativeTransitionsAndroid: {
        "type": "flip",
        "direction": "right"
    },
    nativeTransitionsBackAndroid: {
        "type": "flip",
        "direction": "left"
    },
    templateUrl: 'templates/flights-view.html',
    controller: 'GroupCtrl' 
  })
  .state('detail', {
    url: '/flightdetail',
    nativeTransitionsAndroid: {
        "type": "flip",
        "direction": "right"
    },
    nativeTransitionsBackAndroid: {
        "type": "flip",
        "direction": "left"
    },
    templateUrl: 'templates/flight-detail-view.html',
    controller: 'DetailCtrl'   
   })
  $urlRouterProvider.otherwise('index');
});
