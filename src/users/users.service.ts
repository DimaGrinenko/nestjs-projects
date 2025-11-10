import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './user.schemes';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UsersEntity) private readonly usersRepository: Repository<UsersEntity>,) {}


 async createUser(createUserDto: CreateUsersDto) {
   const existUser = await this.usersRepository.findOneBy({email: createUserDto.email});
   if (existUser) {
     throw new BadRequestException(`User with this email already exists`);
   }

   const user = this.usersRepository.create(createUserDto);
    return  this.usersRepository.save(user);
  }

  async getUsers() {
    return this.usersRepository.find();
  }

  async findUserByEmail(email: string) {
    return this.usersRepository.findOne({where: {email: email}});
  }

  async findUserByName(name: string) {
    return this.usersRepository.findOne({where: {name: name}});
  }

  async findUserById(id: string) {
    return this.usersRepository.findOne({where: {id: id}});
  }
}

