import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Miguel',
      sobrenome: 'Vilela',
      email: 'miguel@gmail.com',
      idade: 18,
      peso: 52,
      altura: 1.60,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
