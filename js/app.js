(() => {
    'use strict';

    let app = angular.module('conversorApp', [])

    /* Controllers */
    app.controller('conversorCtrl', () => {
        return new Conversor()
    })

    app.filter('numero', () => {
        return (input) => {
            if (input === null || isNaN(input)) {
                return "Ingrese un número"
            }
            return input.toString().replace('.', ',')
        }
    })

})()
