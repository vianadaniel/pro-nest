import { Module } from '@nestjs/common';
import { PersonController } from 'src/controllers/personController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModel } from 'src/models/person.model';

@Module({
  imports: [TypeOrmModule.forFeature([PersonModel])],
  controllers: [PersonController],
})
export class PersonModule {}
