import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './product.schemes';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
  }


  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }

  @Get()
  async getProducts() {
    return this.productsService.getProducts()
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(id)

  }


}

