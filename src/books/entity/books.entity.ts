import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class BooksEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  publishedAt: Date;

  @Column()
  authorId: number;

  @Column()
  userId: number;
}
