import { Body, Controller, Post } from '@nestjs/common';
import { CombinedDTO } from './practice2.dto';
import { Practice2Service } from './practice2.service';


@Controller('practice2')
export class Practice2Controller {
  constructor(private practice2Service: Practice2Service) {}

  @Post('/set')
  combined(@Body() body: CombinedDTO) {
    const { combined } = body
    const result = this.practice2Service.combined(combined);
    return { count: result };
  }
}
