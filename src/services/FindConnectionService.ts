import Connection from "../models/Connection";

class FindConnectionService {
  async execute(id: string) {
    const connection = Connection.findById(id);

    console.log(connection);

    return connection;
  }
}

export { FindConnectionService };
