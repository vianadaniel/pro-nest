import { Module } from '@nestjs/common';
import { PersonModule } from './modules/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [PersonModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
