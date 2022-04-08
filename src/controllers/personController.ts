import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonModel } from 'src/models/person.model';
import { Repository } from 'typeorm';

@Controller('/person')
export class PersonController {
  constructor(
    @InjectRepository(PersonModel) private model: Repository<PersonModel>,
  ) {}
  /**
   * create
   */
  @Post()
  public create() {
    return { data: 'Create!!' };
  }

  /**
   * update
   */
  @Put()
  public update() {
    return { data: 'Update!!' };
  }

  /**
   * delete
   */
  @Delete()
  public delete() {
    return { data: 'Delete!!' };
  }

  /**
   * get
   */
  @Get()
  public async get(): Promise<{ data: PersonModel[] }> {
    const people = await this.model.find();
    return { data: people };
  }

  /**
   * getById
   */
  @Get(':id')
  public getById() {
    return { data: 'Person' };
  }
}
