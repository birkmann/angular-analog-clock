'use strict';


// vanilla
setInterval(function() {
    function r(el, deg) {
        el.setAttribute('transform', 'rotate(' + deg +' 50 50)')
    }
    var d = new Date();
    r(sec, 6*d.getSeconds());
    r(min, 6*d.getMinutes());
    r(hour, 30*(d.getHours()%12) + d.getMinutes()/2);
}, 1000);


myApp.controller('clockCtrl', function($scope,$interval) {

    function calculateRotation() {
        var now = new Date();
        $scope.hourRotation   = 360 * now.getHours()   / 12;
        $scope.minuteRotation = 360 * now.getMinutes() / 60;
        $scope.secondRotation = 360 * now.getSeconds() / 60;
    }

    $interval(calculateRotation, 1000);
    calculateRotation();
    
});