// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('winnerController', function($scope, $timeout) {
  $scope.won = false;
  var wc = localStorage.getItem('winCount');
  $scope.winCount = wc ? wc : 0;
  $scope.win = function() {
    if ($scope.won == true) {
      return;
    }
    $scope.won = true;
    $scope.winCount++;
    localStorage.setItem('winCount', $scope.winCount);
    $timeout(function() {
      $scope.won = false;
    }, 1000)
  }
})
