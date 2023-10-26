import { Module } from '@nestjs/common';
import { Practice2Service } from './practice2.service';
import { Practice2Controller } from './practice2.controller';

@Module({
  providers: [Practice2Service],
  controllers: [Practice2Controller]
})
export class Practice2Module {}
