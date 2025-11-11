import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './entity/users.entity';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './dto/create.users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async createUser(createUsersDto: CreateUsersDto) {
    const existUser = await this.usersRepository.findOneBy({
      email: createUsersDto.email,
    });
    if (existUser) {
      throw new BadRequestException('Users with this email already exists');
    }
    const user = await this.usersRepository.create(createUsersDto);
    return this.usersRepository.save(user);
  }

  async getAllUsers() {
    return this.usersRepository.find();
  }


  async getUserById(id: string) {
    return this.usersRepository.findOne({where: {id: id}});
  }

  async deleteUser(id: string) {
    const existUser = await this.usersRepository.findOne({where: {id: id}})
    if (!existUser) {
      throw new BadRequestException('User with this id does not exist');
    }
    return this.usersRepository.delete(id);
  }
}
