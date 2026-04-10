import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('slugify')
  generateSlug(@Body('text') text: string) {
    const result = this.appService.slugify(text);
    return {
      original: text,
      slug: result,
    };
  }
}