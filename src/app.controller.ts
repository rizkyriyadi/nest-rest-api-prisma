import { Controller, Get, Res } from '@nestjs/common';
import { join } from 'path';

@Controller()
export class AppController {
  @Get()
  getIndexHtml(@Res() res) {
    const filePath = join(__dirname, '..', 'dist', 'public', 'index.html');
    res.sendFile(filePath);
  }
}
