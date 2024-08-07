import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('signup')
  getSignupPage(@Res() res: Response): void {
    const filePath = join(process.cwd(), 'dist', 'public', 'signup.html');
    res.sendFile(filePath);
  }

  @Get('login')
  getLoginPage(@Res() res: Response): void {
    const filePath = join(process.cwd(), 'dist', 'public', 'login.html');
    res.sendFile(filePath);
  }

  @Get()
  getLandingPage(@Res() res: Response): void {
    const filePath = join(process.cwd(), 'dist', 'public', 'index.html');
    res.sendFile(filePath);
  }
}
