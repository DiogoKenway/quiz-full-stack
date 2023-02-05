export default class QuestaoModel {
    #id: number;
    #enuncido: string;
    #resposta: any[];
    #acertou: boolean;
    // #respondida: boolean;

    constructor(id: number, enunciado: string, resposta: any[], acertou: boolean) {
        this.#id = id;
        this.#enuncido = enunciado;
        this.#resposta = resposta;
        this.#acertou = acertou;
    }

    get id() {
        return this.#id;
    }
}