import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  findAll(): string {
    return 'Get all products';
  }

  findOne(id: number): string {
    return 'Get a single product: ' + id;
  }

  create(): string {
    return 'Create a new product';
  }

  update(): string {
    return 'Update a product';
  }

  remove(): string {
    return 'Delete a product';
  }
}
