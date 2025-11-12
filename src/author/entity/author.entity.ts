import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('author')
export class AuthorEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  bio: string;

}