class Conversor {

	constructor() {
		this.millas = 0
		this.kilometros = ' <ingrese millas> '
	}	

	convertir() {
		console.log("convertir del dominio")
		this.kilometros = this.millas * 1.60934
	}

}