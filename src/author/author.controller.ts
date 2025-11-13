import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create.author.dto';


@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  async createAuthor(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.createAuthor(createAuthorDto);
  }

  @Get()
  async getAllAuthors() {
    return this.authorService.getAllAuthors()
  }

  @Get(':id')
  async getAuthorById(@Param('id') id: string) {
    return this.authorService.getAuthorById(id)
  }

  @Delete(':id')
  async deleteAuthor(@Param('id')id: string) {
    return this.authorService.deleteAuthor(id)
  }

}
