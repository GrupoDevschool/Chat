import { Mensagem as MensagemModel } from '../models/Mensagem';
import { Mensagem } from '../interfaces/Mensagem';

async function salvarMensagem(msg: Mensagem) {
    const mensagem = new MensagemModel(msg);
    return await mensagem.save();
}

export { salvarMensagem };