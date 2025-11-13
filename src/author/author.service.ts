import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from './entity/author.entity';
import { Repository } from 'typeorm';
import { CreateAuthorDto} from './dto/create.author.dto';


@Injectable()
export class AuthorService {
  constructor(@InjectRepository(AuthorEntity) private readonly authorRepository: Repository<AuthorEntity> ) {}
  
  async createAuthor(createAuthorDto: CreateAuthorDto) {
    const existAuthor = await this.authorRepository.findOneBy({name: createAuthorDto.name})
    if (existAuthor) {
      throw new BadRequestException('Author already exists');
    }
    const author = await this.authorRepository.create(createAuthorDto);
    return this.authorRepository.save(author);
  }

  async getAllAuthors() {
    return this.authorRepository.find();
  }

  async getAuthorById(id: string) {
    return this.authorRepository.findOne({where: { id: id }});
  }

  async deleteAuthor(id: string) {
    const existAuthor = await this.authorRepository.findOne({where: { id: id }});
    if (!existAuthor) {
      throw new BadRequestException(`Author with this ID does not exists`);
    }
    return this.authorRepository.delete(existAuthor);
  }
}
