import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('signup')
  getSignupPage(@Res() res: Response): void {
    res.sendFile(join(__dirname, '..', 'public', 'signup.html'));
  }

  @Get('login')
  getLoginPage(@Res() res: Response): void {
    res.sendFile(join(__dirname, '..', 'public', 'login.html'));
  }
}
