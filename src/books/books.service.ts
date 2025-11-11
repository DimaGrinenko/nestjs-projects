import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBooksDto } from './dto/create.books.dto';
import { BooksEntity } from './entity/books.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BooksEntity)
    private booksRepository: Repository<BooksEntity>,
  ) {}

  async createBook(createBooksDto: CreateBooksDto) {
    const existBook = await this.booksRepository.findOneBy({
      name: createBooksDto.name,
    });
    if (existBook) {
      throw new BadRequestException(`Book with this name already exists`);
    }
    const book = await this.booksRepository.save(createBooksDto);
    return this.booksRepository.save(book);
  }

  async getAllBooks() {
    return this.booksRepository.find();
  }

  async getBookById(id: string) {
    return this.booksRepository.findOne({ where: { id: id } });
  }

  async deleteBook(id: string) {
    const existBook = await this.booksRepository.findOne({ where: { id: id } });
    if (!existBook) {
      throw new BadRequestException(`Book with this ID does not exists`);
    }
    return this.booksRepository.delete(id);
  }
}
