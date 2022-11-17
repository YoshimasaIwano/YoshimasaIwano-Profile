import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { FlowerData } from './flowers/flowers.entity';

import { FlowersModule } from './flowers/flowers.module';
import { FlowersService } from './flowers/flowers.service';
import { FlowersController } from './flowers/flowers.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "passyoshi",
      database: "myportofolio",
      synchronize: false,
      // logging: false,
      entities: [FlowerData],
      // migrations: [],
      // subscribers: [],
    }),
    FlowersModule,
  ],
  controllers: [AppController, FlowersController],
  providers: [AppService, FlowersService],
})
export class AppModule {}

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
