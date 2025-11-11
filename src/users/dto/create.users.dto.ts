import { IsEmail, IsString } from 'class-validator';

export class CreateUsersDto{
  @IsString()
  name: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  password: string;
}
