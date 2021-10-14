import Connection from "../models/Connection";

interface IConnectionRequest {
  socketId: string;
  roomId: string;
  userId: string;
}

class CreateConnectionService {
  async execute({ socketId, roomId, userId }: IConnectionRequest) {
    const connection = await Connection.create({ socketId, roomId, userId });

    return connection;
  }
}

export { CreateConnectionService };
