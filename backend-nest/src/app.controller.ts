import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('something')
  // // @Render('index')
  // // root() {
  // // }
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
