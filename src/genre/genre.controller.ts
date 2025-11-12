import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create.genre.dto';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  async createGenre(@Body() createGenreDto: CreateGenreDto) {
    return this.genreService.createGenre(createGenreDto);
  }

  @Get()
  async getAllGenres() {
    return this.genreService.getAllGenres();
  }

  @Get(':id')
  async getGenreById(@Param('id') id: string) {
    return this.genreService.getGenreById(id);
  }

  @Delete(':id')
  async deleteGenre(@Param('id') id: string) {
    return this.genreService.deleteGenre(id);
  }
}
