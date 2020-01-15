class ListaNegociacoes {

    constructor() {

        this._negociacoes=[];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }


    get negociacoes(){

        return [].concat(this._negociacoes);// Vai retornar um novo array de negociacoes, programacao defensiva
    }


    esvazia(){

        this._negociacoes=[];
    }

}