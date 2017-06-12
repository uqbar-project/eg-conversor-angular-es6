(() => {
    'use strict';

    let app = angular.module('conversorApp', [])

    /* Controllers */
    app.controller('conversorCtrl', () => {
        return new Conversor()
    })

})()
