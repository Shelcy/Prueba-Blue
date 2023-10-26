import { Module } from '@nestjs/common';
import { Practice1Controller } from './practice1/practice1.controller';
import { Practice1Module } from './practice1/practice1.module';
import { Practice1Service } from './practice1/practice1.service';
import { Practice2Controller } from './practice2/practice2.controller';
import { Practice2Module } from './practice2/practice2.module';
import { Practice2Service } from './practice2/practice2.service';

@Module({
  imports: [Practice1Module, Practice2Module],
  controllers: [Practice1Controller, Practice2Controller],
  providers: [Practice1Service, Practice2Service],
})
export class AppModule {}
