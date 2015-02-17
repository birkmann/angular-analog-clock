"use strict";

var myApp = angular.module('myApp', [
    'ngRoute'
]);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/clock', {
        templateUrl:'templates/view1.html',
        controller: 'clockCtrl'
    })
    .when('/view2', {
        templateUrl:'/templates/view2.html',
        controller: 'view2Ctrl'
    })
    .otherwise({
        redirectTo: '/clock'
    });
});