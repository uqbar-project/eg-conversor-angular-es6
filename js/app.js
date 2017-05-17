(() => {
    'use strict';

    var app = angular.module('conversorApp', [])

    /* Controllers */
    app.controller('conversorCtrl', () => {
        return new Conversor()
    })

})()
