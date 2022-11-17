import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlowersService } from './flowers.service';
import { FlowersController } from './flowers.controller';
import { FlowerData } from './flowers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FlowerData])],
  providers: [FlowersService],
  controllers: [FlowersController],
  exports: [TypeOrmModule],
})

export class FlowersModule {}