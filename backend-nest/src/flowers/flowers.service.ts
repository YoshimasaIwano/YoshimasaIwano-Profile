import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FlowerData } from './flowers.entity';

@Injectable()
export class FlowersService {
    constructor(
    @InjectRepository(FlowerData)
    private flowersRepository: Repository<FlowerData>,
    ) {}

    findAll(): Promise<FlowerData[]> {
    return this.flowersRepository.find();
    }

    findOne(id: number): Promise<FlowerData> {
    return this.flowersRepository.findOneBy({ id });
    }
    
    async remove(id: string): Promise<void> {
        await this.flowersRepository.delete(id);
    }
}