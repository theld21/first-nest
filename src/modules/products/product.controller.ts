import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.productService.findAll(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<string>('', HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }

  @Get(':id')
  findOne(): string {
    try {
      return new ResponseData<string>(
        this.productService.findOne(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<string>('', HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }

  @Post()
  create(): string {
    return this.productService.create();
  }

  @Put(':id')
  update(): string {
    return this.productService.update();
  }

  @Delete(':id')
  remove(): string {
    return this.productService.remove();
  }
}
