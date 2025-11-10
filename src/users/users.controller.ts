import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './user.schemes';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUsersDto) {
    return this.usersService.createUser(createUserDto);
  }


  @Get()
  async getUsers() {
    return this.usersService.getUsers()
  }

  @Get(':email')
  async findUserByEmail(@Param('email') email: string) {
    return this.usersService.findUserByEmail(email);
  }

  @Get(':name')
  async findUserByName(@Param('name') name: string) {
    return this.usersService.findUserByName(name);
  }

  @Get(':id')
  async findUserById(@Param('id') id: string) {
    return this.usersService.findUserById(id)
  }
}
