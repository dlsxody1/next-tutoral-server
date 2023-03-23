import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  password: string;

  @Column()
  nickname: string;
}
