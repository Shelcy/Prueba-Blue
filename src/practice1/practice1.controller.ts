import { Body, Controller, Get, Post } from '@nestjs/common';
import { PalindromeDTO } from './practice1.dto';
import { Practice1Service } from './practice1.service';

@Controller('practice1')
export class Practice1Controller {
  constructor(private practice1Service: Practice1Service) {}

  @Post('/palindrome')
  palindrome(@Body() body: PalindromeDTO) {
    const result = this.practice1Service.palindrome(body.phrase);
    return { count: result };
  }
}
