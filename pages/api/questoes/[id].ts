import questoes from "../bancoDeQuestoes";

export default  (req: any, res: any) => {
    const idSelecionado = +req.query.id;

    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado);

    if(unicaQuestaoOuNada.length === 1) {
      
    }

    res.status(200).json(questoes[0].paraObjeto());
  }

