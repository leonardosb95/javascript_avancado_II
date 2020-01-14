class Conta {

    constructor() {
        this._saldo;
    }

    get saldo() {

        return this._saldo;
    }

    set saldo(saldo) {
        this._saldo = saldo;

    }

    atualiza(taxa) {
        throw new Error('Você deve sobrescrever o método ');
    }




}