import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // We can set the whitelist field on the ValidationPipe (middleware) constructor to true
  // to strip-out any key-value from our DTO transform if that key isn't defined in our DTO (Prevent prop injection from request body)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3303);
}
bootstrap();
