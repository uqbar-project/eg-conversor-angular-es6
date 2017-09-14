class Conversor {

	constructor() {
		this.millas = 0
		this.kilometros = ' <ingrese millas> '
	}	

	convertir() {
		this.kilometros = this.millas * 1.60934
	}

}