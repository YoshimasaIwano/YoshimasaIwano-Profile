import { Controller, HttpStatus, Get, Res } from '@nestjs/common';
import { FlowersService } from './flowers.service';

@Controller()
export class FlowersController {
    constructor(private readonly flowersService: FlowersService) {}

    @Get('/Gallery/Flower')
    async fetchAll(@Res() response) {
        const flowers = await this.flowersService.findAll();
        console.log('get flower data');
        return response.status(HttpStatus.OK).json({
            flowers
        })
    }
}
