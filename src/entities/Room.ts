import { Column, Entity, ObjectIdColumn } from "typeorm";
import { Mensagem } from "./Mensagem";

@Entity("rooms")
class Room {
  @ObjectIdColumn()
  id: string;

  @Column()
  nome: string;

  @Column((type) => Mensagem)
  mensagens: Mensagem[];
}

export { Room };
