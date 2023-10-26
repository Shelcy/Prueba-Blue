import { Module } from '@nestjs/common';
import { Practice1Controller } from './practice1/practice1.controller';
import { Practice1Module } from './practice1/practice1.module';
import { Practice1Service } from './practice1/practice1.service';

@Module({
  imports: [Practice1Module],
  controllers: [Practice1Controller],
  providers: [Practice1Service],
})
export class AppModule {}
