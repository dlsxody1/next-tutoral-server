import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DashboardEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  isChecked: boolean;
}
