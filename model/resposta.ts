export default class RespostaModel {
    #valor: string;
    #certa: boolean;
    #revelada: boolean;

    constructor(valor: string, certa: boolean, revelada: boolean) {
        this.#valor = valor;
        this.#certa = certa;
        this.#revelada = revelada;
    }
}