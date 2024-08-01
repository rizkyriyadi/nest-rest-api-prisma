import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(`Request... ${req} Response... ${res}`);
    if (res.statusCode === 200 || res.statusCode === 201) {
      console.log(`Suscessful Request... `);
    } else {
      throw new Error(`Error Request... `);
    }

    next();
  }
}
