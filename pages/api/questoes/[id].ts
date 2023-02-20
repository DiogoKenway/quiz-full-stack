import questoes from "../bancoDeQuestoes";

export default  (req: any, res: any) => {
    const idSelecionado = +req.query.id;

    

    res.status(200).json(questoes[0].paraObjeto());
  }

