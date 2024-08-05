import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { exec } from 'child_process';

@Controller('webhook')
export class WebhookController {
  @Post()
  async handleWebhook(@Req() req: Request, @Res() res: Response) {
    // Verifikasi payload jika perlu
    console.log('Received webhook:', req.body);

    // Jalankan perintah untuk menarik update dan restart aplikasi
    exec(
      'cd /path/to/your/repo && git pull origin main && pm2 restart all',
      (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      },
    );

    res.status(200).send('Webhook received');
  }
}
