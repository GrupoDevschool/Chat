import { Room } from "../models/Room";

class FindRoomService {
  async execute(id: string) {
    const room = Room.findById(id);

    console.log(room);

    return room;
  }
}

export { FindRoomService };
