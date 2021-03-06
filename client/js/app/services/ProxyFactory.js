class ProxyFactory {


    static create(objeto, props, acao) {

        return new Proxy(objeto, {

            get(target, prop, receiver) {

                if(props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {//Verifica se a propriedade do Objeto e adiciona ou esvazia
                    return function () {
                        console.log(`interceptando ${prop}`);
                        let retorno=Reflect.apply(target[prop], target, arguments);//retorna o valor da propriedade, a referência ao Objeto e coloca os argumentos da propriedade
                         acao(target);
                         return retorno;

                    }
                }

                return Reflect.get(target, prop, receiver);
            },


            set(target, prop, value, receiver) {
                if (props.includes(prop)) {

                    target[prop] = value;
                    acao(target);

                }
                return Reflect.set(target, prop, value, receiver);

            }


        });
    }

    static _ehFuncao(func) {
        return typeof (func) == typeof (Function);
    }

}