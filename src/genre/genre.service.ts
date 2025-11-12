import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenreEntity } from './entity/genre.entity';
import { Repository } from 'typeorm';
import { CreateGenreDto } from './dto/create.genre.dto';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(GenreEntity)
    private genreRepository: Repository<GenreEntity>,
  ) {}

  async createGenre(createGenreDto: CreateGenreDto) {
    const existGenre = await this.genreRepository.findOneBy({
      name: createGenreDto.name,
    });
    if (existGenre) {
      throw new BadRequestException(`Genre ${existGenre.name} already exists`);
    }
    const genre = await this.genreRepository.create(createGenreDto);
    return this.genreRepository.save(genre);
  }

  async getAllGenres() {
    return this.genreRepository.find();
  }

  async getGenreById(id: string) {
    return this.genreRepository.findOne({ where: { id: id } });
  }

  async deleteGenre(id: string) {
    const existGenre = await this.genreRepository.findOne({
      where: { id: id },
    });
    if (!existGenre) {
      throw new BadRequestException(`Genre ${id} not found`);
    }
    return this.genreRepository.delete(id);
  }
}
