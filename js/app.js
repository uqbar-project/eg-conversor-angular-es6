class ConversorController {
    constructor(conversorService) {
        this.conversorService = conversorService
    }

    convertir() {
        console.log("convertir del controller")
        this.conversorService.convertir()
    }
}

/** Definición de controllers y services */
angular.module('conversorApp', [])
    .service('conversorService', Conversor) 
    .controller('conversorCtrl', ConversorController)
    .controller('conversor2Ctrl', (conversorService) => {
        return conversorService
    })
