class NegociacaoController {

    constructor() {//Deixamos o acesso a document dentro do constructor, para não acessar o DOM diversas vezes =

        let $ = document.querySelector.bind(document);//Abreviando o document, parecido com jquery
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        let self=this;

        this._listaNegociacoes=new Proxy(new ListaNegociacoes(), {

            get(target, prop, receiver) {
                if (['adiciona', 'esvazia'].includes(prop) && typeof (target[prop]) == typeof (Function)) {//Verifica se a propriedade do Objeto e adiciona ou esvazia

                    return function () {

                        console.log(`interceptando ${prop}`);
                        Reflect.apply(target[prop], target, arguments);//retorna o valor da propriedade, a referência ao Objeto e coloca os argumentos da propriedade
                        self._negociacaoView.update(target);//para referência ao NegociacaoController

                    }
                }

                return Reflect.get(target, prop, receiver);
            }


            // set: function(target, prop, value,receiver) {

            //     console.log(`Antigo valor: ${target[prop]} /Novo valor:${value}`);
            //     return Reflect.set(target, prop, value, receiver);

            // }
        });


        // this._listaNegociacoes = new ListaNegociacoes(model=>// O model é a instância da função que vai ser chamada
        //     this._negociacaoView.update(model));// Quando ele chamar o evazia ou adiciona, ele dispara o update


        this._negociacaoView = new NegociacoesView($("#negociacaoView"));
        this._negociacaoView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#MensagemView"));
        this._mensagemView.update(this._mensagem);

    }


    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
        this._mensagem.texto = 'Negociacao adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
        console.log(this._listaNegociacoes);
    }
    
    apaga() {

        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociacoes apagadas com sucesso';
        console.log(this._mensagem);
    }
    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

    }
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();


    }



}