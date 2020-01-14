class ListaNegociacoes {

    constructor(armadilha) {

        this._negociacoes=[];
        this._armadilha=armadilha;
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
        this._armadilha(this);// A própia instância que esta sendo chamada, o metodo adiciona
    }


    get negociacoes(){

        return [].concat(this._negociacoes);// Vai retornar um novo array de negociacoes, programacao defensiva
    }


    esvazia(){

        this._negociacoes=[];
        this._armadilha(this);// A própia instância que esta sendo chamada, o metodo esvazia
    }

}