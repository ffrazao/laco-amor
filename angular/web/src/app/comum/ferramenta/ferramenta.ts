export function gerarFormulario(entidade: any) {
    let result = {};

    for (let campo in entidade) {
        if (entidade.hasOwnProperty(campo)) {
            result[campo] = [entidade[campo], []];
        }
        console.log(entidade, result);
    }

    return result;
}