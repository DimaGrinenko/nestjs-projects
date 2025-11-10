import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './products.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './product.schemes';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async createProduct(createProductDto: CreateProductDto) {
    const product = await this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  async getProducts() {
    return this.productRepository.find();
  }

  async getProductById(id: string) {
    return this.productRepository.findOne({where: {id: id}})
  }
}
