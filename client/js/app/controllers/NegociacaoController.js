class NegociacaoController {

    constructor() {//Deixamos o acesso a document dentro do constructor, para não acessar o DOM diversas vezes =

        let $ = document.querySelector.bind(document);//Abreviando o document, parecido com jquery
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');


        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($("#negociacaoView")),
            'adiciona', 'esvazia');

            
            this.mensagem = new Bind(
                new MensagemView(),
                new MensagemView($("#MensagemView")),
                'texto');


    }


    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this.mensagem.texto = 'Negociacao adicionada com sucesso';
        this._limpaFormulario();
    }

    apaga() {

        this._listaNegociacoes.esvazia();
        this.mensagem.texto = 'Negociacoes apagadas com sucesso';
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