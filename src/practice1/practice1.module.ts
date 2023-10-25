import { Module } from '@nestjs/common';
import { Practice1Service } from './practice1.service';
import { Practice1Controller } from './practice1.controller';

@Module({
  providers: [Practice1Service],
  controllers: [Practice1Controller]
})
export class Practice1Module {}
