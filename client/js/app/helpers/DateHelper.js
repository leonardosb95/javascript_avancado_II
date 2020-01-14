class DateHelper {


    constructor() {
        throw new Error('DateHelper não pode ser instanciada');

    }

    static dataParaTexto(data) {//Retorna uma string
        //Utilizando o template String
        return `${data.getDate()}
        /${data.getMonth() + 1}
        /${data.getFullYear()}`;

    }

    static textoParaData(texto) {//Converte para data

       if(!/\d{4}-\d{2}-\d{2}/.test(texto))
       throw new Error('Deve estar no formato aaaa-mm-dd');
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }




}