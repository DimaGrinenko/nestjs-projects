import { IsNumber, IsString } from 'class-validator';

export class CreateGenreDto {
  @IsNumber()
  id: string;

  @IsString()
  name: string;
}
