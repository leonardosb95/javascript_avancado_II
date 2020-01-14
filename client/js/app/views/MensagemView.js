class MensagemView extends View{

    constructor(elemento) {// Eu aceito receber o elemento, mas a classe pai que tem que atribuir esse elemento
        super(elemento);
    }
    template(model) {
        //Se texto for uma string em branco 
        return model.texto?`<p class="alert alert-info">${model.texto}</p>`:`<p></p>`;

    }


}