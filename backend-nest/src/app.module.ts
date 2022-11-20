import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

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
      entities: [FlowerData],

      // host: "localhost",
      // port: 3306,
      // username: "xs078424_yoshi",
      // password: "PK5wb2T.biLCk74",
      // database: "xs078424_myportofolio",
      // synchronize: false,
      // entities: [FlowerData],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../', 'build'),   // <-- path to the static files
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

// @Module({
//   imports: [
//     ServeStaticModule.forRoot({
//       rootPath: join(__dirname, '..', 'client'),   // <-- path to the static files
//     }),
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
