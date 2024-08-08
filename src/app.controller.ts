import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { join, resolve } from 'path';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get('signup')
  getSignupPage(@Res() res: Response): void {
    const filePath = resolve('dist/public/signup.html');
    console.log('Serving file from:', filePath);
    res.sendFile(filePath);
  }

  @Get('login')
  getLoginPage(@Res() res: Response): void {
    const filePath = resolve('dist/public/login.html');
    console.log('Serving file from:', filePath);
    res.sendFile(filePath);
  }
}
