import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes : QuestaoModel[] = [
    new QuestaoModel(306, "Qual bicho transmite a doença de chagas?", [
        new RespostaModel("Abelha", false),
        new RespostaModel("Barata", false),
        new RespostaModel("Pulga", false),
        new RespostaModel("Barbeiro", true),
    ])
]

export default questoes;
