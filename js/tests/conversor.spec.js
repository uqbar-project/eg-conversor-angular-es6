describe('Tests para el conversor - objeto de dominio', () => {
    const conversor = new Conversor()
    const conversorInicial = new Conversor()

    beforeEach( () => {
         conversor.millas = 100
         conversor.convertir()
    })

    it('Convertir 100 millas debe dar 169.0344 kilometros', () => {
        expect(160.2934).toBe(conversor.kilometros)
    })

    it('Un conversor inicial no tiene kilometros definidos', () => {
        expect(' <ingrese millas> ').toBe(conversorInicial.kilometros)
    })

    it('Un conversor inicial tiene 0 millas definidas', () => {
        expect(0).toBe(conversorInicial.millas)
    })

})
