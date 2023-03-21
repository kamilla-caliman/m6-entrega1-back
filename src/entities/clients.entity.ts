import { Contacts } from "./contacts.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeUpdate,
  BeforeInsert,
  OneToMany,
} from "typeorm";
import { hash } from "bcryptjs";

@Entity("clients")
export class Clients {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 80 })
  firstName: string;

  @Column({ length: 80 })
  lastName: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 150 })
  password: string;

  @Column({ length: 10 })
  telephone: string;

  @CreateDateColumn()
  createdAt: Date;

  @BeforeUpdate()
  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await hash(this.password, 10);
    }
  }

  @OneToMany(() => Contacts, (contacts) => contacts.client)
  contacts: Contacts[];
}
