import { IsNumber, IsString } from 'class-validator';

export class CreateUsersDto {

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsNumber()
  password: string;

  @IsNumber()
  phoneNumber: string;
}