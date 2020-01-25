class NegociacaoController {

    constructor() {//Deixamos o acesso a document dentro do constructor, para não acessar o DOM diversas vezes =

        let $ = document.querySelector.bind(document);//Abreviando o document, parecido com jquery
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');


        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($("#negociacaoView")),
            'adiciona', 'esvazia', 'ordena', 'inverteOrdem');


        this.mensagem = new Bind(
            new MensagemView(),
            new MensagemView($("#MensagemView")),
            'texto');

        this._ordemAtual = '';

    }



    adiciona(event) {
        event.preventDefault();


        try {

            this._listaNegociacoes.adiciona(this._criaNegociacao());
            this.mensagem.texto = 'Negociacao adicionada com sucesso';
            this._limpaFormulario();

        } catch (error) {
            this.mensagem.texto=error;

        }
    }



    importaNegociacoes() {
        let service = new NegociacoesServices();


        Promise.all(
            [service.obterNegociacoesDaSemana(),
            service.obterNegociacoesDaSemanaAnterior(),
            service.obterNegociacoesDaSemanaRetrasada()])
            .then(negociacoes => {
                let concatenouArrays = negociacoes.reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                concatenouArrays.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this.mensagem.texto = 'Negociacoes importadas com sucesso!!';
            })
            .catch(error => this.mensagem.texto = error);

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

    ordena(coluna) {

        if (this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.ordena((p, s) => p[coluna] - s[coluna]);
        }
        this._ordemAtual = coluna;
    }





    // service.obterNegociacoesDaSemana()
    //     .then(negociacoes => negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
    //         .catch(erro => this.mensagem.texto = erro));

    // service.obterNegociacoesDaSemanaAnterior()
    //     .then(negociacoes => negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
    //         .catch(erro => this.mensagem.texto = erro));


    // service.obterNegociacoesDaSemanaRetrasada()
    //     .then(negociacoes => negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
    //         .catch(erro => this.mensagem.texto = erro));



    // service.obterNegociacoesDaSemana((erro, negociacoes) => {
    //     if (erro) {
    //         this.mensagem.texto = erro;
    //         return;
    //     }
    //     negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
    //     this.mensagem.texto = 'Importado com sucesso a lista de negociacoes';


    // });




}