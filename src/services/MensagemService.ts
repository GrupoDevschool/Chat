import { Mensagem as MensagemModel } from '../models/Mensagem';
import { Mensagem } from '../interfaces/Mensagem';
import { Room } from '../models/Room';

async function salvarMensagem(msg: Mensagem) {
    const mensagem = new MensagemModel(msg);
    const mensagemCriada = await mensagem.save();
    await Room.findByIdAndUpdate(
        mensagem.room,
        {$set: {
            ultimaMensagem: mensagem._id
        }
    });
    return mensagemCriada;
};

async function buscarMensagemPorGrupo(roomId: string) {
    const mensagens = await MensagemModel.find({ roomId })
        .populate('room')
        .populate({path: 'autor', select: 'nome _id'})
        .exec();
         
        
    return mensagens;
};

export { salvarMensagem, buscarMensagemPorGrupo};