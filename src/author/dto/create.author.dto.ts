import { IsNumber, IsString } from 'class-validator';

export class createAuthorDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  bio: string;
}
