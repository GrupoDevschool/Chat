import { Mensagem as MensagemModel } from '../models/Mensagem';
import { Mensagem } from '../interfaces/Mensagem';
import { ObjectId, Schema } from 'mongoose';

async function salvarMensagem(msg: Mensagem) {
    const mensagem = new MensagemModel(msg);
    return await mensagem.save();
};

async function buscarMensagemPorGrupo(roomId: string) {
    const mensagens = await MensagemModel.find(/* { roomId } */)
        .populate('room')
        .populate({path: 'autor', select: 'nome _id'})
        .exec();
         
        
    return mensagens;
};

export { salvarMensagem, buscarMensagemPorGrupo};