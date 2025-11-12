import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('genre')
export class GenreEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
