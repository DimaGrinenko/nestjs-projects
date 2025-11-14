import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('publisher')
export class PublisherEntity{

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  country: string;

  @Column()
  foundedAt: Date;
}