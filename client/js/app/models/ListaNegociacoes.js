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

    get volumeTotal(){


        return this._negociacoes.reduce((total,n)=> total + n.volume,0.0);
    }

    orderna(criterio){

        this._negociacoes.sort(criterio);

    }

    inverteOrdem(){

        this._negociacoes.reverse();
    }

}