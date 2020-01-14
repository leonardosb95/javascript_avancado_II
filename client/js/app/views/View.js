class View {

    constructor(elemento) {
        this._elemento = elemento;


    }

    template(){//Caso o template não seja implementado nas filhas, lança uma exceção

        throw new Error('O método template deve ser implementado');

    }

    update(model) {
        this._elemento.innerHTML = this.template(model);

    }


}