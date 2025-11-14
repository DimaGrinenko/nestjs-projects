import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PublishersService } from './publishers.service';
import { CreatePublisherDto } from './dto/create.pulisher.dto';

@Controller('publishers')
export class PublishersController {
  constructor(private readonly publishersService: PublishersService) {}

  @Post()
  async createPublisher(@Body() createPublisherDto: CreatePublisherDto) {
    return this.publishersService.createPublisher(createPublisherDto);
  }

  @Get()
  async getAllPublishers() {
    return this.publishersService.getAllPublishers()
  }

  @Get(':id')
  async getPublisherById(@Param('id') id: string) {
    return this.publishersService.getPublisherById(id)
  }

  @Delete(':id')
  async deletePublisher(@Param('id') id: string) {
    return  this.publishersService.deletePublisher(id);
  }
}
