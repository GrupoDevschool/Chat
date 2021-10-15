import { Room } from "./../models/Room";

class CreateRoomService {
  async execute(nome: string) {
    const room = await Room.create({ nome });

    return room;
  }
}

export { CreateRoomService };