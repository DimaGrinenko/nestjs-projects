import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UsersEntity{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}