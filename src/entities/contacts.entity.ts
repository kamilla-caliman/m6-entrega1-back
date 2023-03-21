import { Clients } from "./clients.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";

@Entity("contacts")
export class Contacts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 80 })
  firstName: string;

  @Column({ length: 80 })
  lastName: string;

  @Column({ length: 80 })
  email: string;

  @Column({ length: 10 })
  telephone: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Clients, (clients) => clients.contacts)
  client: Clients;
}
