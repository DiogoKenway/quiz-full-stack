import RespostaModel from "./resposta";

export default class QuestaoModel {
    #id: number;
    #enunciado: string;
    #respostas: RespostaModel[];
    #acertou: boolean;
    // #respondida: boolean;

    constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou: boolean = false) {
        this.#id = id;
        this.#enunciado = enunciado;
        this.#respostas = respostas;
        this.#acertou = acertou;
    }

    get id() {
        return this.#id;
    }

    get enunciado() {
        return this.#enunciado;
    }

    get resposta() {
        return this.#respostas;
    }

    get acertou() {
        return this.#acertou;
    }

    get respondida() {

        for(let resposta of this.#respostas) {
            if (resposta.revelada) return true;
        }

        return false;
    }
}