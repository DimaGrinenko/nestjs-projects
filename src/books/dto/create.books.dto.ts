import { IsString } from 'class-validator';

export class CreateBooksDto {

  @IsString()
  name: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  publishedAt: Date;

  @IsString()
  authorId: number;

  @IsString()
  userId: number;
}
