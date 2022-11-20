import { NestFactory } from '@nestjs/core';
// import { NestExpressApplication } from '@nestjs/platform-express';
// import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // <NestExpressApplication>
  // app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.setViewEngine('html');
  const PORT = process.env.PORT || 3001;
  await app.listen(PORT);
  console.log(`nest application is up an running on port: ${PORT}`);
}
bootstrap();
