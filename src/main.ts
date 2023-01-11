import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.NODE_PORT || 3001;
  app.listen(port).then(() => {
    console.log("listening on " + port);
  });
  
}
bootstrap();
