import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('slugify')
  generateSlug(@Body() body: any) { 
    const result = this.appService.slugify(body.text);
    return {
      original: body.text,
      slug: result,
    };
  }
}