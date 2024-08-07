import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { LoggerMiddleware } from './logger.middleware';
import { MetricsModule } from './metrics/metrics.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, ArticlesModule, MetricsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('articles');
  }
}
