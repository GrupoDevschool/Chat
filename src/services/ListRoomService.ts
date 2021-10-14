import { Room } from "./../models/Room";

class ListRoomService {
  async execute() {
    const rooms = Room.find();

    return rooms;
  }
}

export { ListRoomService };
