import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create.users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.createUser(createUsersDto);
  }


  @Get()
  async getUser() {
    return this.usersService.getUser()
  }

}
