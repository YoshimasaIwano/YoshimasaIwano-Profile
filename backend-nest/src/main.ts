import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3001;
  await app.listen(process.env.port || port);
  console.log(`nest application is up an running on port: ${port}`);
}
bootstrap();
