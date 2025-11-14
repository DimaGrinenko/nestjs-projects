import { IsString } from 'class-validator';

export class CreatePublisherDto {

  @IsString()
  name: string;

  @IsString()
  country: string;

  @IsString()
  foundedAt: Date;
}