import { Room } from "./../models/Room";

class ListRoomService {
  async execute() {
    const rooms = await Room.find().populate({
      path: "ultimaMensagem",
      select: "texto createdAt",
      populate: {
        path: "autor",
        select: "nome",
      },
    });

    console.log(rooms);
    return rooms;
  }
}

export { ListRoomService };
