class Negociacao {

    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());//Cria um novo objeto Long
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);//Congela os valores atribuidos

    }

    get volume() {
        return this.quantidade * this.valor;
    }

    get data() {
        return new Date(this._data.getTime());//Isso é um novo objeto, retornando o Long
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

}