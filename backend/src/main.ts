import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, //if dto object has extra property, it will block the request and throw error
      transform: true,
    }),
  );
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
