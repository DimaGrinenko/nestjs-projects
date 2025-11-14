import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PublisherEntity } from './entity/publisher.entity';
import { CreatePublisherDto } from './dto/create.pulisher.dto';

@Injectable()
export class PublishersService {
  constructor(
    @InjectRepository(PublisherEntity)
    private readonly publisherRepository: Repository<PublisherEntity>,
  ) {}

  async createPublisher(createPublisherDto: CreatePublisherDto) {
    const existPublisher = await this.publisherRepository.findOneBy({
      name: createPublisherDto.name,
    });
    if (existPublisher) {
      throw new BadRequestException('Publisher with this name already exists');
    }

    const publisher = this.publisherRepository.create(createPublisherDto);
    return this.publisherRepository.save(publisher);
  }

  async getAllPublishers() {
    return this.publisherRepository.find();
  }

  async getPublisherById(id: string) {
    const publisher = await this.publisherRepository.findOne({ where: { id } });
    if (!publisher) {
      throw new BadRequestException('Publisher with this id does not exist');
    }
    return publisher;
  }

  async deletePublisher(id: string) {
    const existPublisher = await this.publisherRepository.findOne({ where: { id } });
    if (!existPublisher) {
      throw new BadRequestException('Publisher with this id does not exist');
    }
    return this.publisherRepository.delete(id);
  }
}
